var express = require('express');
var router = express.Router();

const exercisesCtrl = require('../controllers/exercises');

// Get /exercises/new
router.get('/new', exercisesCtrl.new);

// post / exerciese

router.post('/', exercisesCtrl.create);

//Get routes for exercises
router.get('/', exercisesCtrl.index);

module.exports = router;
