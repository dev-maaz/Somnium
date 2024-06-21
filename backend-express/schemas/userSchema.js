
const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({

  username: String,
  useremail: String,
  password: String
  
});

const userModel = mongoose.model('User', userSchema);

module.exports = mongoose.model('User', userSchema);