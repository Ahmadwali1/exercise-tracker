const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const exerciseSchema = new Schema({
  date: {
    type: Date,
    //required: true,
  },
  day: {
    type: String,
    enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    required: true,
    default: 'Friday'
  },
  bodyPart: {
    type: String,
    enum: ['Upper Body', 'Lower Body'],
    required: true,
    default: 'Upper Body'
  },
}, {
  timestamps: true
})

module.exports = mongoose.model('Exercise', exerciseSchema);