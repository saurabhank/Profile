const express = require('express')
const jwt=require('jsonwebtoken')
const User=require('../model/userSchema')
const cookieParser = require('cookie-parser')
const app = express()
app.use(cookieParser())

const Authenticate=async(req,res,next)=>{
        try {
            const token=req.cookies.jwtoken;
            const verifyToken=jwt.verify(token,process.env.SECRET_KEY)

            const rootUser=await User.findOne({_id:verifyToken._id,"tokens.token":token}); 

            if(!rootUser)
            {
                throw new Error("User not Found")
            }
            req.token=token;
            req.rootUser=rootUser;
            req.userID=rootUser._id;

            next();
            
        } catch (error) {
           res.status(401).send("Unauthorized Access")
            console.log(error)
        }
}

module.exports=Authenticate;