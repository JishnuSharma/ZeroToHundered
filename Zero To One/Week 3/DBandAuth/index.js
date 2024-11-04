const express = require("express");
const jwt = require("jsonwebtoken");


const app = express();


app.use(express.json());


const userdb = [
    {
        username: "firstuser",
        password: "1234",
    },
    {
        username: "seconduser",
        password: "1234",
    }
]


app.post('/signin',function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    let valid = false;

    userdb.forEach((user) => {
        if(user.username==username && user.password==password)
        {
            valid = true;
        }
    })
    
    if(!valid)
    {
        res.json({
            message: "User not found",
        });
    }

    const token = jwt.sign({username: username}, "pass123");

    res.json({
        token
    })
})


app.get("/users",function(req,res){

    const token = req.headers.auth;
    const decoded = jwt.verify(token,"pass123");
    try{
        if(decoded)
        {
            let remDb = userdb.filter((user) => {

                if(user.username==decoded.username)
                {
                    return false;
                }
                else
                {
                    return true;
                }
            })

            res.json({
                remDb
            })
        }
    }
    catch(error)
    {
        res.json({
            error: error,
            message:"Invalid request token"
        })
    }
})


app.listen(3000,()=> {
    console.log("Server is running");
})
