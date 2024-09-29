const fs = require("fs");

fs.readFile(
    "D:\\ZeroToHundered\\Zero To One\\Week 2\\Week 2 Assignments\\01-async-js\\easy\\sample.txt",
    "utf8",
    (err, data) => {
        if (err) {
            console.error(err);
            return;
        }

        console.log(data);
    }
);
