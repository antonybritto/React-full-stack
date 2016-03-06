var mongoose = require('mongoose');

var EventSchema = new mongoose.Schema({
  name: String,
  createdBy: String,
  date: Date,
  venue: String
});

// Compiles the schema into a model, opening (or creating, if
//	nonexistent) the 'Event' collection in the MongoDB database
Event = mongoose.model('Event', EventSchema);