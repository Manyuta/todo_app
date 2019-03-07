const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
const TodoSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Todo = mongoose.model('todo', TodoSchema);
