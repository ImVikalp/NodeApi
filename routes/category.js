const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category');

router.get('/', categoryController.getAll);
router.post('/', categoryController.create);
router.get('/:categoryId',categoryController.getById);
router.put('/:categoryId', categoryController.updateById);
router.delete('/:categoryId', categoryController.deleteById);

module.exports = router;