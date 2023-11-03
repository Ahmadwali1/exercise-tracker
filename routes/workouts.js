const express = require('express');
const router = express.Router();
const workoutsCtrl = require('../controllers/workouts');
const ensureLoggedIn = require('../config/ensureLoggedIn');


//post /exercises/:id/workouts
router.post('/exercises/:id/workouts',ensureLoggedIn, workoutsCtrl.create);

//delete /exercises/:id/workouts
router.delete('/exercises/:id/workouts',ensureLoggedIn, workoutsCtrl.delete);


module.exports = router;