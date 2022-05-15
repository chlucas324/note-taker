//dependencies
const fs = require('fs');
const express = require('express');


//set up Express App to listen on port 3001
const app = express();
const PORT = process.env.PORT || 3001;

// Set up Express App to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(express.static('./'));

//require routes.js files
require('./Routes/apiRoutes')(app);
require('./Routes/htmlRoutes')(app);

//start server to begin listening
app.listen(PORT, () => {
    console.log(`Server now on port ${PORT}!`)
});
