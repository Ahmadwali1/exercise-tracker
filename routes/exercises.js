var express = require('express');
var router = express.Router();

const exercisesCtrl = require('../controllers/exercises');

// Get /exercises/new
router.get('/new', exercisesCtrl.new);

//get /exercises/:id
router.get('/:id', exercisesCtrl.show);

// post / exerciese

router.post('/', exercisesCtrl.create);

//Get routes for exercises
router.get('/', exercisesCtrl.index);

//delete /exercises/:id
router.delete('/:id', exercisesCtrl.delete);

//get /exercises/:id/edit
router.get('/:id/edit', exercisesCtrl.edit);

//Put /exercises/:id/update
router.put('/exercises/:id/update', exercisesCtrl.update);


module.exports = router;
