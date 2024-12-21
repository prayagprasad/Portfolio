var express = require("express");
let Books = require('./BookSchema');
let mongodbConnected = require('./MongoDBConnect');
const cors = require('cors');
var bodyparser = require("body-parser");

var app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cors());

app.get('/allbooks', function (req, res) {
    Books.find(function (err, allbook) {
        if (err) {
            console.log(err);
        } else {
            res.json(allbook);
        }
    });
});

app.get('/getbook/:id', function (req, res) {
    let id = req.params.id;
    Books.findById(id, function (err, book) {
        res.json(book);
    });
});

app.post('/addbooks', function (req, res) {
    let newbook = new Books(req.body);
    newbook.save()
        .then(() => {
            res.status(200).json({ 'books': 'book added successfully' });
        })
        .catch(err => {
            res.status(400).send('adding new book failed');
        });
});

app.post('/updatebook/:id', function (req, res) {
    let id = req.params.id;
    let updatedbook = new Books(req.body);

    Books.findByIdAndUpdate(id, {
        booktitle: updatedbook.booktitle,
        PubYear: updatedbook.PubYear,
        author: updatedbook.author,
        Topic: updatedbook.Topic,
        formate: updatedbook.formate
    }, function (err) {
        if (err) {
            console.log(err);
        } else {
            res.status(200).json({ 'books': 'book updated successfully' });
        }
    });
});

app.post('/deleteBook/:id', function (req, res) {
    let id = req.params.id;

    Books.findByIdAndDelete(id, function (err) {
        if (err) {
            console.log(err);
        } else {
            res.status(200).send('Book Deleted');
        }
    });
});

app.listen(5000, function () {
    console.log("Server is running on the port 5000");
});
