const express = require("express");
const userRouter = require("./router/userRouter.js");
const productRouter = require("./router/productRouter.js");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();
app.get("/", (req, res) => {
  res.send(`<h1>hello world</h1>`);
});
app.use(bodyParser.json());
app.use("/api", userRouter);
app.use("/api", productRouter);

app.listen(port, () => {
  console.log("servidor online");
});
