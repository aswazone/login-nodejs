const express = require("express");
const user = express.Router();

//
const userHelpers = require("../helper/userHelper");

//middleware
const verifyLogin = (req,res,next)=>{
    if(req.session.loggedIn){
        next();
    }else{
        res.redirect("/login");
    }
}

user.get("/",verifyLogin,(req,res)=>{
    // console.log(req.session);
    res.render("home");
})

user.get("/login",(req,res)=>{

    res.render("login");
})

user.post("/login",(req,res)=>{
    let userData = req.body;

    userHelpers.doLoginIn(userData).then((data)=>{
            // console.log(data,"weewqbibyub");
            
        req.session.user = data;
        console.log(req.session);
        
        res.render("home");
        
    }).catch((err)=>{
        console.log(err);
        
        res.render("login",{msg:"Invalid Credentials !!"});
    })
})


// router for logout
user.get('/logout',(req,res)=>{
    req.session.destroy();   
    res.render("login",{msg:"logout successfully"});
})

module.exports = user;