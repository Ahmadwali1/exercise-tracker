var express = require('express');
var router = express.Router();

const exercisesCtrl = require('../controllers/exercises');

const ensureLoggedIn = require('../config/ensureLoggedIn');

// Get /exercises/new
router.get('/new', exercisesCtrl.new);

//get /exercises/:id
router.get('/:id',exercisesCtrl.show);

// post / exerciese

router.post('/',ensureLoggedIn, exercisesCtrl.create);

//Get routes for exercises
router.get('/', exercisesCtrl.index);

//delete /exercises/:id
router.delete('/:id',ensureLoggedIn, exercisesCtrl.delete);

//get /exercises/:id/edit
router.get('/:id/edit',ensureLoggedIn, exercisesCtrl.edit);

//Put /exercises/:id/update
router.put('/:id',ensureLoggedIn, exercisesCtrl.update);


module.exports = router;
