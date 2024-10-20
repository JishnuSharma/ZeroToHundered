const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://jishnusharma18:jishnusharma@users.rnexl.mongodb.net/");

const BusinessCardSchema = new mongoose.Schema({
    name: String,
    description: String,
    interests: [{
        type: String,
    }],
    linkedin: String,
    github: String,
});

const BusinessCard = new mongoose.model('Cards', BusinessCardSchema);

module.exports = {
    BusinessCard
}