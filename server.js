const express = require("express");
const app = express();

require("dotenv").config();
const connect = require("./config/connectDB");
//middleware
app.use(express.json());

const PORT = process.env.PORT;
//connect DB
connect();
//create route
app.use("/api/contact", require("./routes/contacts"));


app.listen(5000, (err) =>
  err ? console.error(err) : console.log("server is running")
);
