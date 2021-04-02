const express = require("express");
const router = express.Router();
const signUpTemplateCopy = require("../models/SignUpModels");

router.post("/signup", (req, res) => {
  const signedUpUser = new signUpTemplateCopy({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    address1: req.body.address1,
    address2: req.body.address2,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    country: req.body.country,
  });
  signedUpUser
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
});

const getSignedUsers = async (req, res) => {
  await signUpTemplateCopy.find({}, (err, users) => {
      if (err) {
          return res.status(400).json({ success: false, error: err })
      }
      if (!users.length) {
          return res
              .status(404)
              .json({ success: false, error: `User not found` })
      }
      return res.status(200).json({ success: true, data: users })
  }).catch(err => console.log(err))
}

router.get('/users', getSignedUsers)

module.exports = router;
