//dependencies
const fs = require('fs');
const express = require('express');
const path = require('path');

//set up Express App to listen on port 3001
const app = express();
const PORT = process.env.PORT || 3001;

// Set up Express App to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

//require routes.js files
require('./Routes/apiRoutes');
require('./Routes/htmlRoutes');

//start server to begin listening
app.listen(PORT, () => {
    console.log(`Server now on port ${PORT}!`)
});
