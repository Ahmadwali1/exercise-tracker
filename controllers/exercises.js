const Exercise = require('../models/exercise');

module.exports = {
  new: newExercise,
  create,
  index
}

async function index(req,res) {
  try {
    const exercises = await Exercise.find({});
    res.render('exercises/index', {exercises})

  } catch (err) {
    console.log(err);
  }
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