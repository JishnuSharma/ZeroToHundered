// Express does not come by default with node, and is an external library

// To install express
// npm install express

// These three lines will always be required
const express = require('express');
const app = express();
app.listen(3000);  // Address where the HTTP server should run

function calculateSum(n)
{
    let ans = 0 ;
    for(let i = 1; i<=n; i++)
    {
        ans = ans + i;
    }

    return ans;
}

// Simple function calls but we make a route to call those functions, so that through that route a function is accessible


// req -> Request mein kya aa rha hai
// res -> Response mein kya bhejna hai

/*
In this if a route is written as "/filepaths/:fileName" this means that /filepaths/anything can be passed and this route will be called
only

And to get this file name we need to write it as const name = req.params.fileName;
*/

app.get("/",function(req,res) {
    const n = req.query.n;  // To get the query parameter n 
    const ans = calculateSum(n);
    res.send(ans.toString()); // Whenever sending back a response make sure to send back string, if send back number it will 
    // think of it as a status code and things might break
})

// To pass the parameter to the route as a query parameter
// localhost:3000/?n=30 to pass the value 30 to the function
// localhost:3000?n=20&a=23 to send multiple parameters as query parameters

/*
    // HTTP REQUEST METHODS

    GET -> To fetch something from the server
    POST -> To send something to the server
    PUT -> To update something on the server
    DELETE -> To delete a resource on server

    // STATUS CODES
    200 -> Everything went fine
    404 -> Resource not found
    500 -> Internal Server Error
    411 -> Wrong input are supplied to the route
    403 -> Unauthorized access
*/