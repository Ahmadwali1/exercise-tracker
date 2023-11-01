const Exercise = require('../models/exercise');

module.exports = {
  new: newExercise,
  create,
  index
}

function index(req,res) {
  res.render('exercises/index', {
    exercise: Exercise.getAll()
  })
}

async function create(req, res) {
try {
await Exercise.create(req.body);

res.redirect('/exercises/new');
} catch (err) {
  console.log(err);
  res.render('/exercises/new', {errorMsg: err.message});
}
}

function newExercise(req, res) {
  res.render('exercises/new', {errorMsg: ''});
}