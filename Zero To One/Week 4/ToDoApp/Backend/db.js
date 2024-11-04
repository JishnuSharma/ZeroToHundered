const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://jishnusharma18:jishnusharma@users.rnexl.mongodb.net/');


const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}; 