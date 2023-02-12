const express = require("express");
const dotenv = require("dotenv");
const mongo = require("./connect");
const registerRouter = require('./router/RegisterRouter');
const auth = require("./modules/AuthModule")

dotenv.config();
mongo.connect();

const app = express();
app.use(express.json());

app.use("/", (req, res, next) => {
    console.log("Authenticate");
    next();
});

app.use('/register', registerRouter);
app.use("/", auth.authenticateUser);

app.listen(process.env.PORT || 8000);