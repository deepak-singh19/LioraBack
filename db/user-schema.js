const mongoose = require('mongoose');


// Define a schema for the calendar data
const calendarSchema = new mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    type: String,
    duration: Number,
    EndTime:String,
    IsAllDay:Boolean,
    StartTime:String,
});

// Define a schema for the user
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  location: String,
  course: String,
  hours:Number,
  calendarData: [calendarSchema] // Embed the calendar schema as an array
});

// Create a model for the user schema
const User = mongoose.model('User', userSchema);

module.exports = User;
