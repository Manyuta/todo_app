const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//import routes file
const todos = require("./routes/api/todos");

const app = express();

app.use(bodyParser.json());

//DB config
const db = require("./config/keys").mongoURI;

//connect to Mongo
mongoose
  .connect(db)
  .then(() => {
    console.log("MongoDB connected...");
  })
  .catch(err => {
    console.log(err);
  });

//USE routes
app.use("/api/todos", todos);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
