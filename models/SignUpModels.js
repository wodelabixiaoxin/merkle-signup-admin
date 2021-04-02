//Sign up form server-side validation will be performed. 
const mongoose = require("mongoose");
const signUpTemplate = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First name required'],
  },
  lastName: {
    type: String,
    required: [true, 'Last name required'],
  },
  address1: {
    type: String,
    required: [true, 'Address required'],
  },
  address2: {
    type: String,
  },
  city: {
    type: String,
    required: [true, 'City name required'],
  },
  state: {
    type: String,
    required: [true, 'State name required'],
  },
  zip: {
    type: Number,
    required: [true, 'Zip code required'],
    validate: {
      validator: function (v) {
      //custom validation, checking if the zip code digits number
      return v.toString().length===5 ||v.toString().length===9;
      },
      //message to return if validation fails
      message: 'Zip code must be 5 or 9 digits.'
      },

  },
  country: {
    type: String,
    required: [true, 'Country required'],
    default: "US",
    validate: {
      validator: function (v) {
      return v.toLowerCase()==="us"||v.toLowerCase()==="united states";
      },
      //message to return if validation fails
      message: 'Country name must be United States or US'
      },
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("mytable", signUpTemplate);
