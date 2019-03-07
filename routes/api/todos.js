const express = require("express");
const router = express.Router();

//Todo Model
//to make queries
const Todo = require("../../models/Todo");

//create Routes
//@route GET api/todos = '/'
//@desc Get all todos
//@access public
router.get("/", (req, res) => {
  //fetch all todos from DB
  Todo.find()
    .sort({ date: -1 }) //sort in descending order
    .then(todos => res.json(todos));
});

//@route POST api/todos
//@desc Create a todo
//@access public
router.post("/", (req, res) => {
  //new Todo
  const newTodo = new Todo({
    name: req.body.name
  });

  newTodo.save().then(todo => res.json(todo));
});

//@route DELETE api/todos
//@desc Delete a todo
//@access public
router.delete("/:id", (req, res) => {
  //find todo with id
  Todo.findById(req.params.id)
    .then(todo => todo.remove().then(() => res.json({ success: true })))
    .catch(err => res.json({ success: false }));
});

module.exports = router;
