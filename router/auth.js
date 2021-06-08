const express=require('express')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const authenticate=require('../middleware/Authenticate')
const router=express.Router();

require('../db/conn')
const User=require('../model/userSchema')
// router.get('/', (req, res) => {
//     res.send(`Hello world from the routerapp.js`);
// });

router.post("/register", async (req, res) => {
    const {name,email,phone,work,password,cpassword}=req.body;
    if(!name||!email||!phone||!work||!password||!cpassword)
    {
        return res.status(422).json({error:"Please fill the details "})
    }

   try {
            const userExists= await User.findOne({email:email})
       
            if(userExists)
            {
                return res.status(422).json({error:"Email already registerd "})
            }
            else if(password!=cpassword)
            {
                return res.status(422).json({error:"Password not matching"})
            }
            else
            {
                const user=new User({name,email,phone,work,password,cpassword});
                const userRegister= await user.save()
                if(userRegister)
                {
                    return res.status(201).json({message:"User Registered Successfully"})
                }
                else{
                    return res.status(422).json({error:"Failed to register"})
                }
            }   
   } catch (error) {
        console.log(error)
   }
});

router.post('/signin', async (req, res) => {
    try {
        const {email,password}=req.body
        let token;
        if(!email||!password)
        {
            return res.status(400).json({error:"Please fill the details "})
        }
        const userLogin=await User.findOne({email:email})
        if(userLogin)
        {
            const isMatch=await bcrypt.compare(password,userLogin.password)
            token=await userLogin.generateAuthToken()
            console.log(token)
            res.cookie('jwtoken',token,{
                expires:new Date(Date.now()+25892000000),
                httpOnly:true
            })
            if(!isMatch)
            {
                res.status(400).json({error:"User Error "})
            }
            else
            {
                res.json({message:"Logged in"})
            }
        }
        else{
            res.status(400).json({error:"Invalid Credentials "})
        }
        
    } catch (error) {
        console.log(error)
    }
});

router.get('/about',authenticate, (req, res) => {
    console.log(`Hello my About`);
    res.send(req.rootUser);
});

router.get('/getdata',authenticate,(req,res)=>{
    console.log(`Hello my About`);
    res.send(req.rootUser);
})

router.post('/contact',authenticate,async(req,res)=>{
    try {
        const {name,email,phone,message}=req.body;
        if(!name||!email||!phone||!message)
        {
           return  res.json({error:"Please fill the form"})
        }
        const userContact=await User.findOne({_id:req.userID})

        if(userContact)
        {
            const userMessage=await userContact.addMessage(name,email,phone,message);
            await userContact.save();
            res.status(201).json({message:"User contact added successfully"})
        }


    } catch (error) {
        console.log(error);
    }
})

router.get('/logout', (req, res) => {
    console.log(`Hello my Logout`);
    res.clearCookie('jwtoken',{path:'/'})
    res.status(200).send("User Logged Out");
});

module.exports=router