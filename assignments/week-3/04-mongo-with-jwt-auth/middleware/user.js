const { User } = require("../db");
const jwt = require("jsonwebtoken");
const jetPass = "thisisacat";

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

    let token = (req.headers.authorization).split(" ")[1];

    try {
        let user_obj = jwt.verify(token, jetPass);

        let username = user_obj.username;

        let user = await User.findOne({
            username: username,
        });

        if (!user) {
            res.status(404).json({
                message: "The user does not exist",
            });
            return;
        }
        else {
            req.body.username = user.username;
            next();
        }
    }
    catch (error) {
        res.status(403).json({
            message: "Unauthorized access",
        });
    }
}

module.exports = userMiddleware;