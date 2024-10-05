const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const jwt = require("jsonwebtoken");
const jetPass = "thisisacat";
const { Admin, Course } = require("../db");

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    let username = req.body.username;
    let password = req.body.password;

    if (!username || !password) {
        res.status(400).json({
            message: "Parameters are missing",
        });
    }

    await Admin.create({
        username: username,
        password: password
    });

    res.status(200).json({
        message: "User created successfully",
    });
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    let username = req.body.username;
    let password = req.body.password;

    let user = await Admin.findOne({
        username: username,
        password: password
    });

    if (!user) {
        res.status(404).json({
            message: "No user exists with the given credentials",
        });
        return;
    }

    let token = jwt.sign({ username: username }, jetPass);

    res.json({
        message: "You have been successfuly logged in",
        token: token
    });
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    let courseTitle = req.body.title;
    let courseDescription = req.body.description;
    let coursePrice = req.body.price;
    let courseImageLink = req.body.imageLink;

    if (!courseTitle || !courseDescription || !coursePrice || !courseImageLink) {
        res.status(400).json({
            message: "Missing parameters for course creation",
        });
        return;
    }

    let course = await Course.create({
        title: courseTitle,
        description: courseDescription,
        price: coursePrice,
        imageLink: courseImageLink,
    });

    res.status(200).json({
        message: "Course created successfully",
        courseId: course._id,
    });
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic

    let courses = await Course.findOne({});

    res.status(200).json({
        courses
    });
});

module.exports = router;