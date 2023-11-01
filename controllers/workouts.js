const Exercise = require('../models/exercise');

module.exports = {
  create,
}

async function create(req,res) {
  const exercise = await Exercise.findById(req.params.id);
  exercise.workouts.push(req.body);
  try {
    await exercise.save();
  } catch (err) {
    console.log(err);
  }
  res.redirect(`/exercises/${exercise._id}`);
}