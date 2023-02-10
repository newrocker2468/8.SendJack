import express from 'express'
const router = express.Router()
import bcrypt from "bcrypt";
import mysql from ".././sqlConnect.js";


import { body, validationResult } from 'express-validator';
import bodyParser from "body-parser";

router.use(bodyParser.urlencoded({ extended: false }))

router.get("/login", (req, res) => {
    res.render("login");
});
router.post("/login",
    body('email', { message: "Please Enter a Valid Email Format!", loggedIn: false, }).isEmail().normalizeEmail().withMessage(),
    body('password', { message: "Please Enter a Valid Password!", loggedIn: false, }).isLength({ min: 5 }).not().isEmpty().trim().escape(),
    (req, res) => { 
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.send(errors.array()[0].msg);
        }

        let query1 = `SELECT COUNT(*) AS rowCount FROM users WHERE email= '${req.body.email}'`;
        let query = `SELECT * FROM users WHERE email= '${req.body.email}'`
        mysql.query(query1, (err, rows) => {
            if (err) throw err;
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

export default router