const { Router } = require("express");
const { BusinessCard } = require("../db");
const router = Router();

router.post("/create-card", async (req, res) => {

    let name = req.body.name;
    let description = req.body.description;
    let interests = req.body.interests;
    let linkedinLink = req.body.linkedinLink;
    let githubLink = req.body.githubLink;

    await BusinessCard.create({
        name: name,
        description: description,
        interests: interests,
        linkedin: linkedinLink,
        github: githubLink
    })

    res.status(200).json({
        message: "Business card created successfully",
    });
})

router.get("/cards", async (req, res) => {

    let cards = await BusinessCard.find({});

    res.status(200).json({
        cards
    });
})

module.exports = router;