const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    let username = req.body.username;
    let password = req.body.password;

    if (!username || !password) {
        res.status(403).json({
            message: "Input parameters are missing",
        });
        return;
    }

    try {
        await User.create({
            username: username,
            password: password
        });

        res.status(200).json({
            message: "User created successfully"
        })
    }
    catch (err) {
        res.status(500).json({
            message: "An error has occured please try again"
        });
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic

    try {
        let courses = await Course.find({});

        res.status(200).json({
            courses: courses,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "An error has occured, please try again",
        })
    }

});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic

    let courseId = req.params.courseId;
    let username = req.headers.username;

    try {
        User.updateOne({
            username: username,
        }, {
            "$push": {
                purchasedCourse: courseId,
            }
        });

        res.status(200).json({
            message: "Course has been purchased successfully",
        });
    }
    catch (error) {
        res.status(500).json({
            message: "An error has occured please try again",
        });
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic

    const username = req.headers.username;

    try {
        let user = await User.findOne({
            username: username,
        });

        let courses = await Course.find({
            _id: {
                "$in": user.purchasedCourse,
            }
        })

        res.status(200).json({
            courses: courses,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "An error occured, try again later",
        });
    }
});

module.exports = router