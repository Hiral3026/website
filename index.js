const express = require("express");
const path = require("path"); //included with node

const app = express(); //Creating an Express app
const port = process.env.PORT || "8888";

//Set up Express app to use Pug as the template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//Set up public folder path for static files
app.use(express.static(path.join(__dirname, "public")));

//Set up server listening
app.listen(port, () => {
    console.log('Listening on http://localhost: ' + port );
});



