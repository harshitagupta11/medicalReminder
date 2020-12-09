const express = require('express')
const router  = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');
const _=require('lodash');
const { update } = require('lodash');

router.post('/medicalHistory',(req,res,err)=>{
const body=_.pick(req.body,['name','email','medicalHistory'])
const user=new User(body)
User.findOneAndUpdate(
    {email:body.email},
    {$push:{medicalHistory:body.medicalHistory}},
    {new:true}).populate("medicalHistory")
    .then(user=>{
    res.send(user)
})

})

router.get('/getMedicalHistory/:email',(req,res,err)=>{
    const email = req.params.email
    User.findOne({email:email}).then(user=>{
        res.status(200)
        res.send(user)
    }).catch(err=>res.send(err))
    
    })

module.exports=router;