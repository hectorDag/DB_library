const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

/* GET users listing. */

router.get('/',async function(req, res, next) {
  const book = await prisma.book.findMany()
    res.status(201).json(book)
});

router.get('/:id',async function(req, res, next) {
  const book = await prisma.book.findUnique({
  where : {
    id : parseInt(req.params.id)
  }
})
    res.status(201).json(book)
});

router.patch('/:id',async function(req, res, next) {
  const book = await prisma.book.updateMany({
  data: req.body,
  where : {
    id : parseInt(req.params.id)
  }
})
    res.status(201).json(book)
});

router.delete('/:id',async function(req, res, next) {
  const book = await prisma.book.delete({
  where : {
    id : parseInt(req.params.id)
  }
})
    res.status(202).json(book)
});

router.post('/',async function(req, res, next) {
  const book = await prisma.book.create({
    data: req.body
    
  })
res.status(201).json(book)
});

module.exports = router;
