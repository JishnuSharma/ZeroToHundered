const fs = require("fs");

const content = "Content to be written to the file";

fs.writeFile("D:\\ZeroToHundered\\Zero To One\\Week 2\\Week 2 Assignments\\01-async-js\\easy\\sample.txt", content, (err) => {
    if (err) 
    {
        console.error(err);
    } 
    else 
    {
        console.log('File written successfully');
    }
});

// To append to a file rather than rewriting the whole file
fs.writeFile('/Users/joe/test.txt', content, { flag: 'a+' }, err => {});

/* 
Flag | Description                                                       | File gets created if it doesn't exist
r+	 | This flag opens the file for reading and writing	                 | ❌
w+	 | This flag opens the file for reading and writing and it also positions the stream at the beginning of the file | ✅
a	 | This flag opens the file for writing and it also positions the stream at the end of the file	| ✅
a+	 | This flag opens the file for reading and writing and it also positions the stream at the end of the file	| ✅
*/