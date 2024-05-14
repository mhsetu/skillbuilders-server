const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const course = require('./data/data.json');
const categories = require('./data/categories.json');
console.log(course.courses[0]);

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/course', (req, res) => {
  res.send(course);
});
app.get('/categories', (req, res) => {
  res.send(categories);
});
app.get('/course/:id', (req, res) => {
  const id = req.params.id;
  const courseDetails = course.courses.find((c) => c.id == id);
  res.send(courseDetails);
});
app.get('/categories/:id', (req, res) => {
  const id = req.params.id;
  const categoryDetails = categories.find((c) => c.id == id);
  res.send(categoryDetails);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
