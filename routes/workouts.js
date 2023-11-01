const express = require('express');
const router = express.Router();
const workoutsCtrl = require('../controllers/workouts');


//post /exercises/:id/workouts
router.post('/exercises/:id/workouts', workoutsCtrl.create);


module.exports = router;