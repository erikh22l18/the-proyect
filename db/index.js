const mongoose = require('mongoose')
const db = require('../config/conf')

mongoose.connect('mongodb+srv://' + db.user + ':' + db.password+ '@clusterdb.xtylp.mongodb.net/' + db.database + '?retryWrites=true&w=majority')
  .then(db => {
    console.log('connected to db')
  }).catch(err => {
    console.error(err)
  })

module.exports = mongoose