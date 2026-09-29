let express = require('express');
let router = express.Router();
let users = require('../models/users');
let bcrypt = require('bcrypt');


// REGISTER
router.post("/register", async (req, res) => {
    try {
        let data = req.body;

        data.password = await bcrypt.hash(data.password, 10);

        let newuser = new users(data);

        let result = await newuser.save();

        res.status(201).send(result);

    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Registration failed",
            error: error.message
        });
    }
});


// LOGIN
router.post("/login", async (req, res) => {
    try {
        let data = req.body;

        let emailcheck = await users.findOne({
            email: data.email
        });

        if (!emailcheck) {
            return res.send("user not found");
        }

        let passcheck = await bcrypt.compare(
            data.password,
            emailcheck.password
        );

        if (passcheck) {
            return res.send("login successful");
        } else {
            return res.send("wrong password");
        }

    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Login failed",
            error: error.message
        });
    }
});


router.get("/viewtask", (req, res) => {
    res.send("view task page called");
});


module.exports = router;