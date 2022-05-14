//dependencies
const fs = require('fs');
const express = require('express');
const path = require('path');
const { application } = require('express');

//set up Express App to listen on port 3000
const app = express();
const PORT = process.env.PORT || 3000;

// Set up Express App to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//route to notes.html
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, 'public/notes.html'));
});


