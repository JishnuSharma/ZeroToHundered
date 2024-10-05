const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require("jsonwebtoken");
const jetPass = "thisisacat";


// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    let username = req.body.username;
    let password = req.body.password;

    if (!username || !password) {
        req.status(400).json({
            message: "Missing parameters required to create a user",
        });
        return;
    }

    await User.create({
        username: username,
        password: password
    });

    res.status(200).json({
        message: "User created successfully",
    });
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic\
    let username = req.body.username;
    let password = req.body.password;

    let user = await User.findOne({
        username: username,
        password: password
    });

    if (!user) {
        res.status(400).json({
            message: "No user found with the given credentials",
        });
        return;
    }

    let token = jwt.sign({ username: username }, jetPass);

    res.status(200).json({
        message: "User successfully logged in",
        token: token
    });
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic

    let courses = await Course.find({});

    res.status(200).json({
        courses: courses
    });
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic

    let courseId = req.params.courseId;
    let username = req.body.username;

    await User.updateOne({
        username: username,
    }, {
        "$push": {
            purchasedCourses: courseId,
        }
    });

    res.status(200).json({
        message: "The course has been purchased successfully",
        courseId: courseId
    });
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    let username = req.body.username;

    let user = await User.findOne({
        username: username,
    });

    let courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses,
        }
    })

    res.status(200).json({
        courses: courses,
    });
});

module.exports = router