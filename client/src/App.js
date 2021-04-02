import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Register from './components/Register';
import UserList from './components/UserList';

//Sign up form. Client-side validation will be performed. If the form is valid, the values
// will be submitted and saved in MongoDB Atlas Cloud Database. 

class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Register} exact/>
             <Route path="/admin" component={UserList}/>

           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;
