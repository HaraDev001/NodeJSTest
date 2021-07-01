const express = require("express");
const fetch = require('node-fetch')

const validateUser = express.Router();

const serverUrl = "https://hummingbird-staging.podgroup.com";

validateUser.get("/", (req, res, next) => {
  var body = {
    username: process.env.USER_NAME,
    password: process.env.PASSWORD
  };
console.log(JSON.stringify(body));
  try {
    fetch(serverUrl + '/auth/token', {
      method: "post",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" }
    })
    .then(res => res.json())
    .then(json => {
      console.log(json);
      res.send("token : " + json['token']);
    })
    .catch(err => console.log(err));
  } catch (err) {
    console.log(err)
    res.status(500).send('Something went wrong')
  }
});

module.exports = {
  validateUser,
};