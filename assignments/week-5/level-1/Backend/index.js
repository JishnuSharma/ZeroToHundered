const express = require('express');
const app = express();
const cors = require("cors");
const businesscard = require("./routes/user");

app.use(express.json());
app.use(cors());

app.use("/user", businesscard);

app.listen(3000, () => {
    console.log("App is listening on port 3000");
})

