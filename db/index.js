const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/proyect')
  .then(db => {
    console.log('connected to db')
  }).catch(err => {
    console.error(err)
  })

module.exports = mongoose