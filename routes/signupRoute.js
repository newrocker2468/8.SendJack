import express from 'express'
const router = express.Router()
import { body, Result, validationResult } from 'express-validator';
import bodyParser from "body-parser";
import mysql from ".././sqlConnect.js";
import bcrypt from "bcrypt";

router.use(bodyParser.urlencoded({ extended: false }))

router.get("/signup", (req, res) => {
  res.render("register");
});

router.post("/signup",

  body('email').if(body('type').equals('signup')).isEmail().normalizeEmail().withMessage("Not a Valid Email"),
  body('password').if(body('type').equals('signup')).not().isEmpty().trim().escape(),
  body('firstname').if(body('type').equals('signup')).not().isEmpty().trim().escape(),
  body('lastname').if(body('type').equals('signup')).not().isEmpty().trim().escape(),
  body('phone').if(body('type').equals('signup')).not().isEmpty().trim().escape().isNumeric(),

  body('otp').if(body('type').equals('otp')).not().isEmpty().trim().escape().isNumeric(),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.send(errors.array()[0].msg);
    }

    if (req.body.type == "otp") {
      const query = `SELECT * FROM sendotp WHERE email ='${req.body.email}' AND unique_key ='${req.body.key}'`
      mysql.query(query, (err, rows) => {
        if (err) {
          throw err
        } else {
          const OTP = rows[0].otp
          if (req.body.otp == OTP) {
            res.send({ otp: true })
          } else {
            res.send({ otp: false })
          }
        }
      })
    } else if (req.body.type == "signup") {
      bcrypt.hash(req.body.password, 12, (err, result) => {
        if (result) {
          const query = `INSERT INTO users(first_name, last_name, email, phone1, password) VALUES ('${req.body.firstname}','${req.body.lastname}','${req.body.email}',${req.body.phone}, '${result}')`
          mysql.query(query, (err) => {
            if (err) {
              throw err
            } else {
              const quer = `DELETE FROM sendotp WHERE email = '${req.body.email}'`
              mysql.query(quer, (err) => {

                if (err) {
                  throw err
                  return false
                } else {
                  res.send({ success: true })
                }
              })
            }
          })
        }
      })
    }
  })

export default router;