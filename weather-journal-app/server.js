// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
const app = express();
const path = require('path')
const appData = {}


const cors = require('cors');
// Start up an instance of app
const bodyParser = require('body-parser');
const { dirname } = require('path');
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Cors for cross origin allowance

// Initialize the main project folder
app.use(express.static(path.join(__dirname,"." ,'website')));


// Setup Server
const port = 8000;
const server = app.listen(port, listening);

function listening() {

    console.log("server running")
    console.log(`running on localhost: ${port}`)

}

app.get("/all", sendData)

function sendData (req, res) {
    res.send(projectData);
}



app.post('/add', addDAta);

function addDAta(req, res) {
    console.log(req.body)
    projectData={
        temp:req.body.temp,
        data:req.body.data,
        content:req.body.content,
    }
projectData.push(projectData);
}