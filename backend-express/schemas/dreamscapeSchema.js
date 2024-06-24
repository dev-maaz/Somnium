
const mongoose = require('mongoose');
const dreamSchema = require('./dreamSchema');
const { Schema } = mongoose;

const dreamscapeSchema = new Schema({

  title: String,
  dreams: [dreamSchema]
  
});

module.exports = dreamscapeSchema;