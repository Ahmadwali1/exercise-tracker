const mongoose = require("mongoose");

const Schema = mongoose.Schema;

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
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Exercise", exerciseSchema);
