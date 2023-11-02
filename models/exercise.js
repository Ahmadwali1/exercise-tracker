const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutsSchema = new Schema(
  {
    legExercises: {
      type: String,
    },
    chestExercises: {
      type: String,
    },
    shoulderExercises: {
      type: String,
    },
    armExercises: {
      type: String,
    },
    abdominalExercises: {
      type: String,
    },
    cardioExercises: {
      type: String,
    },
    weight: {
      type: Number,
      required: true,
    },
    unitSystems: {
      type: String,
      required: true,
    },
    sets: {
      type: Number,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const exerciseSchema = new Schema(
  {
    date: {
      type: Date,
      //required: true,
    },
    day: {
      type: String,
      enum: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      required: true,
    },
    bodyPart: {
      type: String,
      enum: ["Upper Body", "Lower Body"],
      required: true,
    },
    workout: [workoutsSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Exercise", exerciseSchema);
