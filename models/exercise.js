const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutsSchema = new Schema(
  {
    legExercises: {
      type: String,
      enum: [
        "Squats",
        "Deadlifts",
        "Lunges",
        "Leg Press",
        "Leg Extensions",
        "Leg Curls",
        "Calf Raises",
      ],
    },
    chestExercises: {
      type: String,
      enum: [
        "Bench Press",
        "Dumbbell Bench Press",
        "Incline Bench Press",
        "Chest Flyes",
        "Push-Ups",
        "Cable Crossovers",
      ],
    },
    shoulderExercises: {
      type: String,
      enum: [
        "Overhead Press",
        "Dumbbell Shoulder Press",
        "Lateral Raises",
        "Front Raises",
      ],
    },
    armExercises: {
      type: String,
      enum: [
        "Bicep Curls",
        "Hammer Curls",
        "Tricep Dips",
        "Tricep Extensions",
        "Pushdowns",
        "Cable Curls",
      ],
    },
    abdominalExercises: {
      type: String,
      enum: [
        "Crunches",
        "Leg Raises",
        "Planks",
        "Russian Twists",
        "Cable Crunches",
        "Hanging Leg Raises",
        "Ab Rollouts",
      ],
    },
    cardioExercises: {
      type: String,
      enum: ["Treadmill", "Stationary Bike", "Stair Climber", "Jump Rope"],
    },
    weight: {
      type: Number,
      required: true,
    },
    unitSystems: {
      type: String,
      enum: ["Kg", "Lb"],
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
      //default: 'Friday',
      required: true,
    },
    bodyPart: {
      type: String,
      enum: ["Upper Body", "Lower Body"],
      //default: 'Upper Body',
      required: true,
    },
    workout: [workoutsSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Exercise", exerciseSchema);
