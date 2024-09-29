const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// middlewares 
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

// To recieve post data
app.post('/send',(req,res) => {
    console.log(req.body);
    res.send('The message sent was indeed: ' + req.body.name);

    // To send back a status code 

    res.status(401).send('The respnse which will go along with the status');

})

// To recieive query parameters
app.get('/message',(req,res) => {
    console.log(req.query.message);
    res.send('The message sent was indeed: ' + req.query.message);
})

// Need to specify where the app should lsiten basically on which port the server should run
app.listen(port, () => {
    console.log(`App is listening on port number ${port}`);
})

/* On the servers there are usually 1 server and based on which 
request comes in it forwards the request to that particular route on
the machine 

A server can host multiple applications and multiple domains
can point to the same server, it is the server who focuses on
who and for whom the request came for

Express does not handle the body of the post request 
- It wants you to make use of a different library so that you can
read the body of the request as well

For this we can use library:
----------------------------
body-parser

first we instally body-parser : npm install body-parser

We can also install [nodemon] so that for each change we make we
the server restarts itself without us needing to do anything

The command we run is: npx nodemon index.js

We send requests from frontend to backend using fetch

We can also send query parameters to the server in form of get
requests and to recieve it we make use of 

let data = req.query.parameter_name

DIFFERENCE BETWEEN NPM AND NPX
-------------------------------
In both of these - npm is used to bring the packages to my
system and npx is used to quickly use a package without
installing it

*/