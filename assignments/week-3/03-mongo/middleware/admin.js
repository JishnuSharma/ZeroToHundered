const { Admin } = require("../db");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    let username = req.headers.username;
    let password = req.headers.password;

    Admin.findOne({
        username: username,
        password: password
    }).then((value) => {
        if (value) {
            next();
        }
        else {
            res.status(404).json({
                message: "No admin exists with the given credentials",
            })
        }
    });
}

module.exports = adminMiddleware;