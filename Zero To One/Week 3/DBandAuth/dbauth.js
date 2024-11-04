const mongoose = require("mongoose");
const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

mongoose.connect("mongodb+srv://jishnusharma18:1u52FHwVVf6UoSJd@users.rnexl.mongodb.net/");

const User = mongoose.model('Users',{name:String, email:String, password:String});

app.use(express.json());

app.post("/signup",async function(req,res){
    
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existingUser = await User.findOne({email:username});

    if(existingUser)
    {
        return res.status(400).json({
            message: "Username already exists"
        });
    }

    const user = new User ({
        name: name,
        email: username,
        password: password,
    });

    user.save();

    res.json({
        message: "User created successfully"
    })
})

app.post("/login",async function(req,res){

    const username = req.body.username;
    const password = req.body.password;

    const existingUser = await User.findOne({email:username});

    if(existingUser.password!=password)
    {
        res.json({
            message:"The password does not match the records."
        })

        return;
    }

    const token = jwt.sign({username:username},"oassp123");

    res.json({
        message:"User successfully signed in",
        token
    })
})

app.get("/users",async function(req,res){

    const token = req.headers.auth;

    try{
        const decoded = jwt.verify(token,"oassp123");

        const users = await User.find({ email: { $ne: decoded.username } });

        res.json({
            users
        })
    }
    catch(err)
    {
        req.json({
            message:"The token is invalid",
        })
    }
})

app.listen(3000,() => {
    console.log("Server is running");
})