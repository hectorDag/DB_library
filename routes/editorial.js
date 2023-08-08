const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

router.get('/',async function(req, res, next) {
  const editorial = await prisma.editorial.findMany()
    res.status(201).json(editorial)
});

router.get('/:id',async function(req, res, next) {
  const editorial = await prisma.editorial.findUnique({
  where : {
    id : parseInt(req.params.id)
  }
})
    res.status(201).json(editorial)
});

router.patch('/:id',async function(req, res, next) {
  const editorial = await prisma.editorial.updateMany({
  data: req.body,
  where : {
    id : parseInt(req.params.id)
  }
})
    res.status(201).json(editorial)
});

router.delete('/:id',async function(req, res, next) {
  const editorial = await prisma.editorial.delete({
  where : {
    id : parseInt(req.params.id)
  }
})
    res.status(202).json(editorial)
});

router.post('/',async function(req, res, next) {
  const editorial = await prisma.editorial.create({
    data: req.body
  })
res.status(201).json(editorial)
});

module.exports = router;