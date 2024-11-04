/*

High level code -> Compilers / Interpreters -> 0 & 1 -> Inside ram

C++ -> Compiled language 
( The compiler converts the whole code in chunk )

JavaScript -> Interpreted Language
( The interpreter goes line by line and hence doesnt require a compilation step )

-> In case of compiled languages, if there is an error in the 
code they would not compile but in interpreted ones, if there is
 an error in the code later on then in that case they would run 
 uptil the point partially where the error is encountered

Javascript is loosely typed language 
- Causes run time errors

SINGLE THREADED NATURE OF LANGAUGES
-------------------------------------
In CPP you can forward the tasks to different threads to do it
at the same time, but in JS you cannot do it, it works on single thread.
IT CAN BE MADE TO USE CORES AT PARALLEL USING SOMETHING CALLED 

: CLUSTERING MODEL :
https://www.digitalocean.com/community/tutorials/how-to-scale-node-js-applications-with-clustering

Since Node.js uses a single thread to execute your JavaScript code, all the requests to the application have to be handled by that thread running on a single CPU.

--> cluster module, which creates multiple copies of the same application on the same machine and has them running at the same time.
It also comes with a load balancer that evenly distributes the load among the processes using the round-robin algorithm. If a 
single instance crashes, users can be served by the remaining processes that are still running. The application’s performance 
significantly improves because the load is shared among multiple processes evenly, preventing a single instance from being 
overwhelmed.


*/

// Variables
var first; // Accessible everywhere not block scope
let second; // Has block scope and can be re assigned but not redeclared
const third = "hello"; // Has block scope and cannot be reassigned and redeclared

// To print a value to log
console.log(third);

// Primitive data types: Strings, Numbers, Booleans

// If else is statement
if (third == "hello") {
    console.log("This is hello");
} else {
    console.log("This is not hello");
}

// Loops
for (let index = 0; index < array.length; index++) {
    const element = array[index];
}

while ((index = 0)) {
    console.log("1");
}

do {
    console.log("1");
} while ((index = 10));

// CALCULATE SUM OF 1 TO A 1000
let numsum = 0;

for (let i = 1; i <= 1000; i++) {
    numsum += i;
}

console.log(numsum);

// ARRAYS

let arr = ["FirstPerson", "SecondPerson", "ThirdPerson"];

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);
}

// Largest element in array

let nums = [10, 22, 34, 2, 12, 55, 22, 4];
let maxElement = 0;

for (let itr = 0; itr < nums.length; itr++) {
    if (nums[itr] > maxElement) {
        maxElement = nums[itr];
    }
}

console.log("Greated number: " + maxElement);

// OBJECTS IN JAVASCRIPT

const user1 = {
    firstName: "Mchnle",
    lastName: "Jordane",
    age: 15,
    gender: "male",
};

const user2 = {
    firstName: "Tony",
    lastName: "Stark",
    age: 25,
    gender: "female",
};

const users = [user1, user2];
console.log(users);

for (let i = 0; i < users.length; i++) {
    if (users[i]["gender"] == "male") {
        console.log(users[i]["firstName"] + users[i]["lastName"]);
    }
}

/* 
FUNCTIONS
-> Abstract logic in program
-> Take arguments as input
-> Return value as output
-> Independent programs supposed to do something
-> FUNCTIONS CAN TAKE OTHER FUNCTIONS AS ARGUMENTS ( CALLBACKS )
*/

function sums(first, second) {
    return first + second;
}

console.log(sums(2, 4));

// CALLBACKS IN FUNCTIONS TO PASS A FUNCTION TO A FUNCTION AS AN ARGUMENT

function sum(num1, num2, funcToCall) {
    let result = num1 + num2;
    funcToCall(result);
}

function displayResult(data) {
    console.log('Result of the sum is: ' + data);
}

function displayPassiveResult(data) {
    console.log("Sum's result is: " + data);
}

// One way to do it
// displayResult(sum(2, 3));

//Other way to do the same
const ans = sum(1, 2, displayResult)

// Callback Hell
/*
Callback hell is a situation in JS where multiple nested callback functions make your code look like its been through blender on the highest setting. 

--> Happens mostly when dealing with asynchronous operations. 
--> When one operation depends on the results of another or previous one
*/