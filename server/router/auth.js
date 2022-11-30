const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router(); 
const bcrypt = require('bcryptjs')
const authenticate= require('../middleware/authenticate')

require('../db/conn');
const User = require('../model/UserSchema');

router.get('/', (req,res) => {
    res.send("hello1")
})


router.post('/register', async (req, res) => {
    const { name, email, phone, password, cpassword } = req.body;

    if (!name || !email || !phone || !password || !cpassword) {
        return res.status(422).json({ error: "please fill the fields"});
    }
    try {
        const userExists = await User.findOne({ email: email })
        if (userExists) {
            return res.status(422).json({ error: "User Exists!!"});
        }
        else if (password !== cpassword) {
            return res.status(422).json({ error: "Passwords do not match!!"});
        }
        else {   
            const user = new User({ name, email, phone, password, cpassword })
            //bring in the hasher
            const userReg = await user.save()
            if(userReg){
                res.status(201).json({ message: "user registered!" })
            }
        }
    } catch (e) {
        console.log(e);
    }
})

//log in

router.post('/signin', async (req, res) => {
    try {
        let token;
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "Enter fields!" });
        }
        const userLogin = await User.findOne({ email: email })
        if (userLogin) {
            let isMatch = await bcrypt.compare(password, userLogin.password);
            token = await userLogin.generateAuthToken();
            
            res.cookie("erv", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            })
            
            if (!isMatch)
                res.status(400).json({ error: "Invalid Credentials! not match pass" });
            else
                res.json({ message: "user signed in!" });
        }
        else {
            res.status(400).json({ error: "Invalid Credentials!" });
        }
    } catch (err) {
        console.log(err);
        
    }
    
});

router.get('/subjects',authenticate,(req,res) => {
    res.send("about") 
})




module.exports = router;