const express = require("express");
const mysql = require("mysql2");

const app = express();

app.use(express.static("public"));
app.use("/fa", express.static(__dirname + "/node_modules/font-awesome/css"));
app.use(
  "/fonts",
  express.static(__dirname + "/node_modules/font-awesome/fonts")
);

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "a08045120755",
  database: "list_app",
});

connection.connect((err) => {
  if (err) {
    console.log("error connecting: " + err.stack);
    return;
  }
  console.log("success");
});

app.get("/", (req, res) => {
  connection.query("SELECT * FROM users", (error, results) => {
    console.log(results);
    res.render("index.ejs");
  });
});

app.listen(3000);
