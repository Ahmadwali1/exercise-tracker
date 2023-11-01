module.exports = {
  new: newExercise,
}


function newExercise(req, res) {
  res.render('exercises/new', {errorMsg: ''});
}