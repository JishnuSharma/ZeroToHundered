/*
    In async tasks we need to pass callbacks, they become important 
    because when the delegated task returns it needs to know where the function resides which
    needs to be executed for the completion of
    the current delegated task

    If there is an infinite loop, no matter how many
    async calls are waiting in the callback queue
    if the thread wont be free they will not get executed. 

    PROMISES
    ---------
    It is just a cleaner way of writing callbacks

    99% of the time you would be using already built
    asynchronous functions to make your own 

    -> Promises help to avoid callback hell, when one asynchrnous call is dependent on other like 

    setimeout function () {
        // for 2 second 

        settimeout function ()
        {
            // for 1 seconds 
        }
    }

    // To first log after 2 second then log 1 econd after it 

    CALLBACK HELL SITUATION CAN BE CREATED
    -> If more than one dependent calls is there 
    this would create a very bad readibility
    and nested code 
    -> Callback hell leads to unnecessary indentation
*/

// Promise approach

function setOwnTimeout(duration) {
    let p = new Promise(function (resolve) {
        setTimeout(resolve, duration);
    });

    return p;
}

setOwnTimeout(1000)
    .then(function () {
        console.log('The function has been logged');
    })

// We can also do
let prom = setOwnTimeout(200);
prom.then(function () {
    console.log('The function has been logged in a different way');
})

// ASYNC AWAIT -> Can only be used when your function returns promise

function startAnynomous() {
    let p = new Promise(function (resolve) {
        resolve('hi there');
    });

    return p;
}

async function main() {
    const value = await startAnynomous();
    console.log(value);
}

main();


// PROMISE CHAINING
function promisifiedTimeout(duration) {
    const p = new Promise(function (resolve) {
        setTimeout(resolve, duration);
    });

    return p;
}

promisifiedTimeout(1000).then(function () {
    console.log('First call is done');
    return promisifiedTimeout(2000);
}).then(function () {
    console.log('Second call is done');
})

// Promise and resolve return data

const p = new Promise(function (onDone) {
    onDone("hi there");
})

p.then(function (arg) {
    console.log(arg);
    // This function will recieve the data as argument
    // Which is passed to the onDone or basically resolve 
    // Just like it works in the case of callbacks
})

// Working with the reject in promises basically is used to handle errors

function promFun() {
    return new Promise(function (resolve, reject) {
        reject();
    })
}

const prom2 = promFun();

prom2
    .then(function () {

    })
    .catch(function () {
        console.log('This is where error is catched');
    })

