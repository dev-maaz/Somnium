
const mongoose = require('mongoose')
const { Schema } = mongoose;

const dreamSchema = new Schema({

  title: String,
  description: String,
  link: String,
  Image: String,
  
});

module.exports = dreamSchema;