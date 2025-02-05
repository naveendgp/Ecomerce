const Router = require('express').Router()
const Register = require('../models/RegisterModel')

Router.post('/',async(req,res)=>{
    const {email,password} = req.body

    if(!email || !password){
        return res.status(422).json({error:"Please fill all the fields"})
    }
    try{
        const userFind = await Register.findOne({email:email})
        if(!userFind){
            return res.status(422).json({error:"Invalid email"})
        }
        if(userFind.password !== password){
            return res.status(422).json({error:"Invalid password"})
        }
        res.status(201).json({message:"User logged in successfully"})
    }catch(err){
        console.log(err)
    }   

})
