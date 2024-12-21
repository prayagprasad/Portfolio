const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();

// Middleware for body parsing
app.use(bodyParser.urlencoded({ extended: true }));

// Create a basic route
app.get("/", (req, res) => {
  res.send("Hello, it is my first Express application.");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

// About route
app.get('/about', (req, res) => {
    res.send("This is a basic Express application.");
  });
  
  // Route with parameters
  app.get('/users/:userId/books/:bookId', (req, res) => {
    res.send(req.params);
  });

  // Route to get all students
app.get('/GetStudents', (req, res) => {
    fs.readFile(__dirname + "/Student.json", 'utf8', (err, data) => {
      if (err) {
        res.status(500).send('Internal Server Error');
      }
      const students = JSON.parse(data);
      res.json({
        status: true,
        Status_Code: 200,
        requested_at: new Date(),
        requrl: req.url,
        requestMethod: req.method,
        studentdata: students
      });
    });
  });
  
  // Search for a student by ID
  app.get('/GetStudentid/:id', (req, res) => {
    fs.readFile(__dirname + "/Student.json", 'utf8', (err, data) => {
      if (err) {
        res.status(500).send('Internal Server Error');
      }
      const students = JSON.parse(data);
      const student = students["Student" + req.params.id];
      if (student) {
        res.json(student);
      } else {
        res.status(404).send('Student not found');
      }
    });
  });

  app.get('/studentinfo', (req, res) => {
    res.sendFile('StudentInfo.html', { root: __dirname });
  });
  
  app.post('/submit-data', (req, res) => {
    const name = `${req.body.firstName} ${req.body.lastName}`;
    const age = `Age: ${req.body.myAge}`;
    const gender = `Gender: ${req.body.gender}`;
    const qualification = `Qualification: ${req.body.Qual}`;
  
    console.log(`Name: ${name}, Age: ${age}, Gender: ${gender}, Qualification: ${qualification}`);
  
    res.send({
      status: true,
      message: 'Form Details Received',
      data: { name, age, gender, qualification }
    });
  });
  
  
  
