import React, { Component } from 'react'
//import ReactTable from "react-table-6";  

import ReactTable from "react-table-6";  
import "react-table-6/react-table.css" 
import styled from 'styled-components'
import axios from 'axios';
//import 'react-table/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`
 
class UserList extends Component {
   constructor(props) {
       super(props)
       this.state = {
           users: [],
           columns: [],
           isLoading: false,
       }
   }

   componentDidMount = async () => {
       this.setState({ isLoading: true })

       await axios.get('/app/users').then(users => {
           this.setState({
            users: users.data.data,
               isLoading: false,
           })
       })
   }

   render() {
       const { users, isLoading } = this.state
       console.log('TCL: UserList -> render -> users', users)

       const columns = [

           {
               Header: 'First Name',
               accessor: 'firstName',
           },
           {
            Header: 'Last Name',
            accessor: 'lastName',
        },
        {
         Header: 'Address 1',
         accessor: 'address1',
     },
     {
      Header: 'Address 2',
      accessor: 'address2',
  },
  {
   Header: 'City',
   accessor: 'city',
},
{
   Header: 'State',
   accessor: 'state',
},
{
   Header: 'Zip Code',
   accessor: 'zip',
},
           
           {
               Header: 'Date',
               accessor: 'date',
           },
       ]

       let showTable = true
       if (!users.length) {
           showTable = false
       }

       return (
           <Wrapper>
               {showTable && (
                   <ReactTable
                       data={users}
                       columns={columns}
                       loading={isLoading}
                       defaultPageSize={10}
                       showPageSizeOptions={true}
                       minRows={0}
                   />
               )}
           </Wrapper>
       )
   }
}

export default UserList