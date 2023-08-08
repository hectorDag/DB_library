const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

/* GET users listing. */

router.get('/',async function(req, res, next) {
  const category = await prisma.category.findMany()
    res.status(201).json(category)
});

router.get('/:id',async function(req, res, next) {
  const category = await prisma.category.findUnique({
  where : {
    id : parseInt(req.params.id)
  }
})
    res.status(201).json(category)
});

router.patch('/:id',async function(req, res, next) {
  const category = await prisma.category.updateMany({
  data: req.body,
  where : {
    id : parseInt(req.params.id)
  }
})
    res.status(201).json(category)
});

router.delete('/:id',async function(req, res, next) {
  const category = await prisma.category.delete({
  where : {
    id : parseInt(req.params.id)
  }
})
    res.status(202).json(category)
});

router.post('/',async function(req, res, next) {
  const category = await prisma.category.create({
    data: req.body
    
  })
res.status(201).json(category)
});

module.exports = router;
