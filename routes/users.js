var express = require('express')
const { get } = require('mongoose')
var router = express.Router()

const User = require('../models/user')

/* GET users listing. */
router.get('/:id', async function(req, res, next) {
  const user = await User.findById(req.params.id)

  res.json({status: 'success', data: user})
})

router.post('/', async (req, res, next) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  })

  const user = await newUser.save()

  res.json({status: 'success', data: user})
})

router.put('/:id', async (req, res, next) => {
  const userId = req.params.id

  await User.findByIdAndUpdate(userId, {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  })

  res.json({status: 'success', data: user})
})

router.delete('/:id', async (req, res, next) => {
  const userId = req.params.id

  await User.findByIdAndRemove(userId)

  res.json({status: 'success', data: null})
})

module.exports = router
