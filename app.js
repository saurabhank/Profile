const dotenv=require('dotenv');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')
app.use(cookieParser())
dotenv.config({path:'./config.env'});
require('./db/conn')

app.use(express.json())

app.use(require('./router/auth'))

const PORT=process.env.PORT||5000
//middleware
const middleware = (req,res, next) => {
    console.log(`Hello my Middleware--Jenkins Push test for build`);
    next();
}

const User=require('./model/userSchema');//User Schema;

//app.get('/', (req, res) => {
//    res.send(`Hello world from the server app.js`);
//});

// app.get('/about',  (req, res) => {
//     console.log(`Hello my About`);
//     res.send(`Hello About world from the server`);
// });

// app.get('/contact',middleware, (req, res) => {
//     res.send(`Hello Contact world from the server`);
// });

app.get('/signin', (req, res) => {
    res.send(`Hello Login world from the server`);
});

app.get('/signup', (req, res) => {
    res.send(`Hello Registration world from the server`);
});

if(process.env.NODE_ENV==="production")
{
    app.use(express.static("client/build"));
    const path=require("path");
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}


app.listen(PORT, () => {
    console.log(`server is running at port no ${PORT}`);
})