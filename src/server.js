require("dotenv").config();
const express = require("express");
const path = require("path");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const mysql = require("mysql2");

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// config template engine
configViewEngine(app);

app.use("/", webRoutes);

const connection = mysql.createConnection({
  host: "localhost",
  port: 3307, // default 3306
  user: "root", // default password: empty
  password: "123456",
  database: "nodejs",
});

connection.query("SELECT * FROM Persons", function (err, result, fields) {
  console.log(">>> result =", result);
  console.log(">>> fields =", fields);
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
