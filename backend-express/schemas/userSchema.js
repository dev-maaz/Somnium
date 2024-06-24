
const mongoose = require('mongoose');
const dreamSchema = require('./dreamSchema');
const dreamscapeSchema = require('./dreamscapeSchema');
const { Schema } = mongoose;

const userSchema = new Schema({

  username: String,
  useremail: String,
  password: String,
  birthdate: Date,
  createdposts: [dreamSchema],
  saveddreamscapes: [dreamscapeSchema]

});

module.exports = userSchema;