const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db");

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    let username = req.body.username;
    let password = req.body.password;

    if (!username || !password) {
        res.status(404).json({
            message: "Please enter username and password",
        });
    }

    await Admin.create({
        username: username,
        password: password
    });

    res.status(200).json({
        message: "Admin created successfully",
    });
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    let courseTitle = req.body.title;
    let courseDescription = req.body.courseDescription;
    let coursePrice = parseInt(req.body.price);
    let courseImageLink = req.body.imageLink;

    if (!courseTitle || !courseDescription || isNaN(coursePrice) || !courseImageLink) {
        return res.status(400).json({ error: "Input parameters are missing" });
    }

    let course = await Course.create({
        title: courseTitle,
        description: courseDescription,
        price: coursePrice,
        imageLink: courseImageLink
    });

    res.status(200).json({
        message: "Course created successfully",
        courseId: course._id,
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic

    let courses = await Course.find({});

    res.json({
        courses: courses,
    })
});

module.exports = router;