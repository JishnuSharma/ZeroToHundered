const { Admin } = require("../db");
const jwt = require("jsonwebtoken");
const jetPass = "thisisacat";

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    console.log(req.headers);
    let token = (req.headers.authorization).split(" ")[1];


    try {
        let user_obj = jwt.verify(token, jetPass);

        let username = user_obj.username;

        let admin = await Admin.findOne({
            username: username,
        });

        if (!admin) {
            res.status(404).json({
                message: "The user does not exist",
            });
            return;
        }
        else {
            req.body.username = admin.username;
            console.log(req.body);
            next();
        }
    }
    catch (error) {
        res.status(403).json({
            message: "Unauthorized access",
        });
    }
}

module.exports = adminMiddleware;