const express = require('express');
const db = require('./utils/db-connection');
const studentRoutes = require('./routes/studentsRoutes');

const app = express();
app.use(express.json()); // Important for POST requests

app.get('/', (req, res) => {
  res.send("Hello world");
});

app.use("/students", studentRoutes);

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Server is running");
});
