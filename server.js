//dependencies
const express = require("express");


//set up Express App to listen on port 3001
const PORT = process.env.PORT || 3001;
const app = express();

// Set up Express App to handle data parsing
app.use(express.static(__dirname + "/public"));
app.use(express.static("./"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//require routes.js files
require("./apiRoutes")(app);
require("./htmlRoutes")(app);

//start server to begin listening
app.listen(PORT, () => {
  console.log(`Server now on port ${PORT}!`);
});
