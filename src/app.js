const express = require("express");
const port = 3000;
const app = express();
app.get("/", (req, res) => {
    res.send('<h1>hello world</h1>');
});
app.listen(port, () => {
    console.log("servidor online")
});