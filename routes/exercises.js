var express = require('express');
var router = express.Router();
const exercisesCtrl = require('../controllers/exercises');

// Get /exercises/new
router.get('/new', exercisesCtrl.new);
module.exports = router;
