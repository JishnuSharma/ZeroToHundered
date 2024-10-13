const express = require("express");
const { createTodo, updateTodo } = require("../Backend/types");
const { todo } = require("./db");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

// To allow that the backend can be silently hit by only a particular endpoint
// app.use(cors({
//     origin: "https://localhost:4000",
// }))

app.get("/todos", async (req, res) => {

    const todos = await todo.find({});

    res.status(200).json({
        todos
    });
})

// string title and string description , zod validation for this
app.post("/todo", async (req, res) => {

    const createPayload = req.body;
    console.log(createPayload);
    const parsePaylod = createTodo.safeParse(createPayload);

    if (!parsePaylod.success) {
        res.status(400).json({
            message: "You sent the wrong inputs",
        });
        return;
    }

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false,
    });

    res.status(200).json({
        message: "Todo created successfully",
    });
})

app.put("/completed", async (req, res) => {

    const updatePayload = req.body;
    const parsePaylod = updateTodo.safeParse(updatePayload);

    if (!parsePaylod.success) {
        res.status(400).json({
            message: "You send the wrong input",
        })
    }

    await todo.update({
        _id: req.body.id,
    }, {
        completed: true,
    });

    res.status(200).json({
        message: "Todo has been updated",
    });
})

app.listen(4000, (req, res) => {
    console.log("App is listening on port 4000");
})