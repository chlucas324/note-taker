const fs = require('fs');

//API routing
module.exports = (app) => {
    let noteList = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

    app.get('/api/notes', (req,res) => {
        return res.json(noteList);
    });

// receive and return new note
app.post('/api/notes', (req, res) => {
    //get id of last note
    let lastId;
    if (noteList.length) {
        lastId = Math.max (...noteList(noteList.map(note => note.id)));
    // otherwise set to 0
    } else {
        lastId = 0;
    }
    // start ids at 1
    const id = lastId + 1;

    // push note id and text in the req.body
    noteList.push ({id, ...req.body});
    // remove last index
    res.json(noteList.slice(-1));
});

// delete note
app.delete('/api/notes/:id', (req, res) => {
    // search for note by id, convert the string into JSON object
    let findNote = noteList.find(({ id }) => id === JSON.parse(req.params.id));

    //deletes objects matching the note ID index
    noteList.splice(noteList.indexOf(findNote), 1);
    res.end("Note was deleted.")
});
};

