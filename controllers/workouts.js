const Exercise = require('../models/exercise');

module.exports = {
  create,
  delete: deleteWorkout
}

async function create(req,res) {
  const exercise = await Exercise.findById(req.params.id);
  exercise.workout.push(req.body);
  try {
    await exercise.save();
  } catch (err) {
    console.log(err);
  }
  res.redirect(`/exercises/${exercise._id}`);
}

async function deleteWorkout(req, res) {
  try {
    const deleteW = await Exercise.findOne({ 'workout._id': req.params.id});
    deleteW.workout.remove(req.params.id);
    await deleteW.save();
    res.redirect("/exercises");
  } catch (err) {
    console.log(err);
  }
}