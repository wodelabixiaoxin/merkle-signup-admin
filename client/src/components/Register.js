import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

//Sign up form. Client-side validation will be performed. If the form is valid, the values
// will be submitted and saved in MongoDB Atlas Cloud Database. 

class Register extends Component {
  constructor() {
    super();
    this.state = {
      
      input:{
        firstName: "",
        lastName: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
        country: "",
      },
      errors:{}
    };
  }

  handleChange=event=>{
    let input = this.state.input;
    if (event.target.name === 'zip') {
      input[event.target.name] = parseInt(event.target.value,10);
    } else {
      input[event.target.name] = event.target.value;
    }
    this.setState({
      input
    });
  }

  onSubmit = event=>{
    event.preventDefault();
    if(this.validate()){
    
    const registered = {
      firstName:this.state.input.firstName,
      lastName:this.state.input.lastName,
      address1:this.state.input.address1,
      address2:this.state.input.address2,
      city:this.state.input.city,
      zip:this.state.input.zip,
      state:this.state.input.state,
      country:this.state.input.country,
    }

    axios.post('/app/signup',registered)
    .then(response => console.log(response.data))
    let input={
      firstName: "",
      lastName: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      country: "",
    };
    this.setState({input:input});
    alert('Your application form is submitted');
  }
  }
  
  validate(){
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["firstName"]) {
      isValid = false;
      errors["firstName"] = "Please enter your first name.";
    }

    if (!input["lastName"]) {
      isValid = false;
      errors["lastName"] = "Please enter your last name.";
    }

    if (!input["address1"]) {
      isValid = false;
      errors["address1"] = "Please enter your address.";
    }

    if (!input["city"]) {
      isValid = false;
      errors["city"] = "Please enter your city.";
    }

    if (!input["state"]) {
      isValid = false;
      errors["state"] = "Please enter your state.";
    }

    if (!input["zip"]) {
      isValid = false;
      errors["zip"] = "Please enter your zip code.";
    }

    if (!input["country"]) {
      isValid = false;
      errors["country"] = "Please enter your country.";
    }

    if (typeof input["zip"] !== "undefined") {
        
      var pattern = new RegExp(/^[0-9\b]+$/);
      if (!pattern.test(input["zip"].toString())) {
        isValid = false;
        errors["zip"] = "Please enter only number.";
      }else if(input["zip"].toString().length !== 5 && input["zip"].toString().length !== 9){
        isValid = false;
        errors["zip"] = "Zip code must be 5 or 9 digits.";
      }
    }

    if (typeof input["country"] !== "undefined") {
      if (input["country"].toLowerCase()!=="us" && input["country"].toLowerCase()!=="united states") {
        isValid = false;
        errors["country"] = "Country must be US or United States.";
      }    
    }

    this.setState({
      errors: errors
    });

    return isValid;
}
  render() {
    return (
      <div>
        <div className="container">
          
          <h1 className="h3 mb-3 font-weight-normal text-center">Please sign up</h1>
            <form onSubmit={this.onSubmit}>

            <div className="form-group">
            <label htmlFor ="firstName">* First Name:</label>
              <input
                type="text"
                name="firstName"
                value={this.state.input.firstName}
                placeholder="First Name"
                onChange={this.handleChange}
                className="form-control form-group"
              />
              <div className="text-danger">{this.state.errors.firstName}</div>
              </div>

              <div className="form-group">
              <label htmlFor ="lastName">* Last Name:</label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={this.handleChange}
                value={this.state.input.lastName}
                className="form-control form-group"
              />
              <div className="text-danger">{this.state.errors.lastName}</div>
              </div>

              <div className="form-group">
              <label htmlFor ="address1">* Address 1:</label>
              <input
                type="text"
                name="address1"
                placeholder="Address 1"
                onChange={this.handleChange}
                value={this.state.input.address1}
                className="form-control form-group"
              />
              <div className="text-danger">{this.state.errors.address1}</div>
              </div>

              <div className="form-group">
              <label htmlFor ="address2">Address 2:</label>
              <input
                type="text"
                name="address2"
                placeholder="Address 2"
                onChange={this.handleChange}
                value={this.state.input.address2}
                className="form-control form-group"
              />
              <div className="text-danger">{this.state.errors.address2}</div>
              </div>

              <div className="form-group">
              <label htmlFor ="city">* City:</label>
              <input
                type="text"
                name="city"
                placeholder="City"
                onChange={this.handleChange}
                value={this.state.input.city}
                className="form-control form-group"
              />
              <div className="text-danger">{this.state.errors.city}</div>
              </div>

              <div className="form-group">
              <label htmlFor ="state">* State:</label>
              <input
                type="text"
                name="state"
                placeholder="State"
                onChange={this.handleChange}
                value={this.state.input.state}
                className="form-control form-group"
              />
              <div className="text-danger">{this.state.errors.state}</div>
              </div>

              <div className="form-group">
              <label htmlFor ="zip">* Zip Code:</label>
              <input
                type="number"
                name="zip"
                placeholder="Zip Code"
                onChange={this.handleChange}
                value={this.state.input.zip}
                className="form-control form-group"
              />
              <div className="text-danger">{this.state.errors.zip}</div>
              </div>
              
              <div className="form-group">
              <label htmlFor ="country">* Country (US only):</label>
              <input
                type="text"
                name="country"
                placeholder="United States"
                onChange={this.handleChange}
                value={this.state.input.country}
                className="form-control form-group"
              />
              <div className="text-danger">{this.state.errors.country}</div>
              </div>

              <input
                type="submit"
                className="btn btn-danger btn-block"
                value="Submit"
              />
            </form>
          
        </div>
      </div>
    );
  }
}

export default Register;
