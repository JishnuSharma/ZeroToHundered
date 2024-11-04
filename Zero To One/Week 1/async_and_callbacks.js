// In callbacks we can basically just pass reference of another function to a function then execute 
// that function inside that function using the reference passed
// This helps to make code reusable by performing same logic while making use of different function
// references

/*
    Synchronous Programming:
    ----------------------
    Together one after the other, only one happening at a time

    Asynchronous Programming:
    ----------------------
    Opposite of synchronous, happens in parts 
    Multiple things are context switching with each other

    Common async functions:
    ---------------------
    setTimeout
    fs.readFile -> To read a file from file system
    Fetch -> To fetch some data from API endpoint

    - There are somethings known as error first arguments 
    these are callbacks in which first we pass error argument
    then the other
*/

const { log } = require("console");
const fs = require("fs");

// This is an asynchronous function so first the log after 
// it is executed then the data read from the file 
fs.readFile("a.txt","utf-8", function(err,data) {
    console.log(data);
})

console.log("First this is executed");

/*
    When we execute an asynchronous function and even if that
    callback is resolved, the control will not shift to it till
    the time the thread is idle 

    If the asynchronous function has resolved and the thread is 
    busy somewhere it would not execute it till the time it
    does not get free

    // The whole process explained:

    First, the code starts running and the async function 
    is put in the callstack and then into the web api section
    after that till the time async callback is resolved it will
    do other things, once the callback is resolved it will be
    put in `Callback Queue` , and when the thread becomes idle
    it will be put back into callstack and executed

    If there are multiple async-await then, the one which is
    resolved earlier will be put in `Callback Queue` before
    and after that the other will be put 


    *Promises are syntactical sugar which makes the process of
    asynchronous functions more readable 

    */

const fs = require('fs');

function readFile()
{
    // Here i am returning basically an instance of promise
    // How it handles the async logic is a different thing
    return new Promise(function(resolve) {
        fs.readFile("a.txt","utf-8",function(err,data) {
            resolve(data);
        });
    })
}

function onDone(data)
{
    console.log(data);
}

readFile().then(onDone); 

// The above line can also be written as 
let a = readFile();
a.then(onDone); // Whatever we pass into resolve it gets passsed
// to the onDone as argument whenever the promise is resolved

// .then basically tells where to send the data once the 
// data is recieived once the promise is resolved 

// Promise is basically a class itself

let d = new Promise(function(resolve) {
    // In this it will always take a function an first argument
    // And the first argument of function will always be resolve ( it can have any name )
});

/*
    Promise can have three states: Pending, Resolved, Rejected
*/

// Understanding promise states 

let pro = new Promise(function(resolve) {
    setTimeout(function(){
        resolve("foo");
    },1000);
});

function callback()
{
    console.log(pro);
}

console.log(d);  // This will log first Pending as not resolved yet
d.then(callback); // Then this will log foo

/*
    ASYNC AND AWAIT 
    -----------------
    It is also just syntactic sugar, still uses callbacks and promises 
    under the hood

    In this case I dont need to use callbacks ka system
    In this case I dont have to use promises ka .then feature
*/

function forAsyncTest()
{
    let p = new Promise(function(resolve) {
        setTimeout(() => {
            resolve('Hi World');
        }, 1000);
    })

    return p;
}

// The two new keywords we introduce is 1. async which tells that
// the function is an asynchronous function and await, which tells that
// we need to wait for the promise to get resolved
async function main()
{
    let value = await forAsyncTest()
    // If there is logic after this await , then it wont 
    // get resolved til lthe time await is resolved
    // but it is not like it is stuck here
    console.log(value);
}

main();
console.log('Still going'); // The code after await wont run till 
// it is resolved but this line will run immidiately, telling
// that the code won't run 

// Await is only valid inside an async function

// Callback syntax, promise-then syntax, and async/await syntax
// all do the same thing, its just the way in which you write it

