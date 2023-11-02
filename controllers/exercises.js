const Exercise = require("../models/exercise");

module.exports = {
  new: newExercise,
  create,
  index,
  show,
  delete: deleteExercise,
  edit,
  update,
};

async function update(req, res) {
  try {
    const exercise = Exercise.findByIdAndUpdate(req.params.id, req.body);
    res.redirect(`/exercises/${req.params.id}`);
  } catch (err) {
    console.log(err);
  }
}

async function edit(req, res) {
  try {
    const exercise = await Exercise.findById(req.params.id);
    res.render("exercises/edit", { exercise });
  } catch (err) {
    console.log(err);
  }
}

async function deleteExercise(req, res) {
  try {
    const deleteE = await Exercise.findByIdAndDelete(req.params.id);
    res.redirect("/exercises");
  } catch (err) {
    console.log(err);
  }
}

async function show(req, res) {
  const exercise = await Exercise.findById(req.params.id);
  res.render("exercises/show", { exercise });
}

async function index(req, res) {
  try {
    const exercises = await Exercise.find({});
    res.render("exercises/index", { exercises });
  } catch (err) {
    console.log(err);
  }
}

async function create(req, res) {
  try {
    await Exercise.create(req.body);

    res.redirect("/exercises/new");
  } catch (err) {
    console.log(err);
    res.render("/exercises/new", { errorMsg: err.message });
  }
}

function newExercise(req, res) {
  res.render("exercises/new", { errorMsg: "" });
}
