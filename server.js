//dependencies
const fs = require('fs');
const express = require('express');
const path = require('path');
const { application } = require('express');

//set up Express App to listen on port 3001
const app = express();
const PORT = process.env.PORT || 3001;

// Set up Express App to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//route to notes.html
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'));
});

// return saved notes as JSON
app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/db/db.json'));
});

// route to index.html
app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

// receive and return new note
app.post('/api/notes', (req, res) => {
    let newNote = {
        id: id,
        title: req.body.title,
        text: req.body.text
    };
    let noteList = JSON.parse(fs.readFileSync('./db/db/json', 'utf8'));
    let noteLength = (noteList.length).toString();
});

// push updated note
noteList.push(newNote);

// write updated data to db/db.json
fs.writeFileSync('./db/db.json', JSON.stringify(noteList));
res.json(noteList);

//start server to begin listening
app.listen(PORT, () => console.log(`Server now on port ${PORT}!`));
