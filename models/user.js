const mongoose = require('mongoose')
const { Schema } = mongoose

const User = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  image: { type: String, required: true }
})

module.exports = mongoose.model('users', User)