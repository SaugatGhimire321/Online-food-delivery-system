const mongoose = require('mongoose');
const validator = require('validator')

const userSchema = new mongoose.Schema({
  
})

const User = new mongoose.model('User', userSchema);

module.exports = User;