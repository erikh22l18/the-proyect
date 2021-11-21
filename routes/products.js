const { log } = require('debug');
const express = require('express');
const router = express.Router();
const path = require('path');

const Product = require('../models/product');

router.get('/', async (req, res, next) => {
  const products = await Product.find()

  res.json({status: 'success', data: products})
})

router.get('/:id', async (req, res, next) => {
  const product = await Product.findById(req.params.id)

  res.json({status: 'success', data: product})
})

router.post('/', async (req, res, next) => {
  const newProduct = new Product({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    image: req.body.image
  })

  await newProduct.save()

  res.json({status: 'Product Saved'})
})

router.put('/:id', async (req, res, next) => {
  const productId = req.params.id
  
  await Product.findByIdAndUpdate(productId, {
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    image: req.body.image
  })
  
  res.json({status: 'Product updated'})
})

router.delete('/:id', async (req, res, next) => {
  const productId = req.params.id
  
  await Product.findByIdAndDelete(productId)

  res.json({status: 'Product deleted'})
})

module.exports = router;