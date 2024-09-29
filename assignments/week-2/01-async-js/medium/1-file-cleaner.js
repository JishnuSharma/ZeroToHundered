const fs = require('fs');

let content = null;

fs.readFile(
    "D:\\ZeroToHundered\\Zero To One\\Week 2\\Week 2 Assignments\\01-async-js\\medium\\sample.txt",
    "utf8",
    (err, data) => {
        if (err) {
            console.error(err);
            return;
        }

        console.log(data);

        let cleanedSentence = data.replace(/\s+/g, ' ').trim();
        console.log(cleanedSentence);

        fs.writeFile("D:\\ZeroToHundered\\Zero To One\\Week 2\\Week 2 Assignments\\01-async-js\\medium\\sample.txt", cleanedSentence, (err) => {
            if (err) 
            {
                console.error(err);
            } 
            else 
            {
                console.log('File written successfully');
            }
        });
    }
);
