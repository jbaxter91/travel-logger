const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
//Cross Origin Resource Sharing Header
const cors = require("cors");
const mongoose = require("mongoose");

require('dotenv').config();


const middlewares = require("./middlewares");
const logs = require("./api/logs");

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
})

const app = express();
app.use(morgan("common"));
app.use(helmet());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.use("/api/logs", logs);

app.use(middlewares.notFound);

app.use(middlewares.errorHandler);

const port = process.env.PORT || 1337;
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
