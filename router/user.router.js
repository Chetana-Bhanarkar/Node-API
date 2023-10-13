const user = require('../service/user.service')
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secretKey = "extremesecret"
const cookieParser = require('cookie-parser');

router.use(cookieParser()) ; 



// register user

router.post('/register', async (req, res) => {
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;
    let phone = req.body.phone;
    let created = req.body.created;
    let updated = req.body.updated;

    let dbResponse = await user.existsUserService(email, username);

    if (dbResponse) {
        res.status(409).json({
            status : "Fail" , 
            message: "This account has already registered"
        })
    } else {
        let message = await user.registerService(first_name, last_name, username, password, email, phone, created, updated);
        res.status(200).json({
            status : "Success" , 
            message: message
        })
    }

    res.status(200).json({
        message: dbResponse
    })
})


//get all users 

router.get('/users', async (req,res) => {
    let dbResponse = await user.getAllUsersService();
    console.log(dbResponse);
    res.status(200).json({
        status:"success" , 
        message :  dbResponse 
    });
})



// Verify user for login 

const verifyUser = (req,res,next) => {

    const token = req.cookies.token ;
    if(!token){
        res.json({message : "Please provide token to login !"})
    }else{
        jwt.verify(token, secretKey ,(err, decoded)=>{
            if(err){
                res.json({Message : "Authentication Error "})
            }else{
                req.name = decoded.name;
                next()
            }
        })
    }
}



// route for user-profile after login

router.get('/profile',verifyUser,(req,res)=>{
    res.json({status : "Success", name : req.name })
})




// login api 

router.post('/login', async(req,res)=>{
    let email = req.body.email ; 
    let password = req.body.password ; 

    let dbResponse = await user.loginService(email , password) ; 

    if(!dbResponse){
        res.status(409).json({message : "Error"})
    }
    if(dbResponse.length > 0){
        const name = dbResponse[0].name ; 
        const token = jwt.sign({name} , secretKey , {expiresIn : '1d'})
        res.cookie('token : ', token);
        res.json({status : "Success"})
    }else{
        res.json({message : "No account !"}) ; 
    }
})



//logout api

router.post('/logout' , (req,res) => {
    res.clearCookie('token');
    res.json({status : "Success"})
})






module.exports = router; 