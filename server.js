require('dotenv').config()

const express = require("express");
const app = express();
const port = 3000;

const connectDB = require("./utils/db");

app.use(express.json());

const authRouter = require("./router/auth-router");
app.use("/api/auth", authRouter);

connectDB().then(() => {

  app.listen(port, () => {
    console.log(`Example app listening on port port`);
  });

});
