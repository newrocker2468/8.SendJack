const express = require("express");
const path = require("path");
var app = express();
const handlebars = require("express-handlebars");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", "./views");
const mysql = require("./sqlConnect.js");
const bcrypt = require("bcrypt");
const saltRounds = 10;


app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/signup", (req, res) => {
  res.render("register");
});

app.post("/mail" (req,res) => {
  
}) 

app.post("/login", (req, res) => {
  let query1 = `SELECT COUNT(*) AS rowCount FROM users WHERE email= 'anuragsawant@duck.com'`;
  let query = `SELECT * FROM users WHERE email= 'anuragsawant@duck.com'`;
  console.log(req.body.email);
  mysql.query(query1, (err, rows) => {
    if (err) throw err;
    console.log(rows[0].rowCount);
    if (rows[0].rowCount == 1) {
      mysql.query(query, (err, rows) => {
        if (err) throw err;
        else {
          bcrypt.compare(req.body.password, rows[0].password, (err, result) => {
            if (err) throw err;
            if (result) {
              res.send({
                message: "Encrypted Password Matches",
                loggedIn: true,
              });
            } else {
              res.send({
                message: "Username or Password is Incorrect",
                loggedIn: false,
              });
            }
          });
        }
      });
    } else {
      res.send({
        message: "Username or Password is Incorrect",
        loggedIn: false,
      });
    }
  });
});

app.listen(5000);
