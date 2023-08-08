const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

/* GET users listing. */

router.get('/',async function(req, res, next) {
  const author = await prisma.author.findMany()
    res.status(201).json(author)
});

router.get('/:id',async function(req, res, next) {
  const author = await prisma.author.findUnique({
  where : {
    id : parseInt(req.params.id)
  }
})
    res.status(201).json(author)
});

router.patch('/:id',async function(req, res, next) {
  const author = await prisma.author.updateMany({
  data: req.body,
  where : {
    id : parseInt(req.params.id)
  }
})
    res.status(201).json(author)
});

router.delete('/:id',async function(req, res, next) {
  const author = await prisma.author.delete({
  where : {
    id : parseInt(req.params.id)
  }
})
    res.status(202).json(author)
});

router.post('/',async function(req, res, next) {
  const author = await prisma.author.create({
    data: req.body,
  })
res.status(201).json(author)
});

module.exports = router;