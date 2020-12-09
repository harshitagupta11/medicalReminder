const express = require('express')
const app =express();
const PORT=4000;

app.listen(PORT,()=>{
    console.log("server is running on port 4000");
})

 const mongoose = require('mongoose');
// const {MONGOURI}= require('./keys');


mongoose.connect('mongodb+srv://harshita:7566808017@cluster0.fxe5v.mongodb.net/medicalHistory?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true 
});
mongoose.connection.on('connected',()=>{
    console.log("mongoDb connected")
})

mongoose.connection.on('error',(err)=>{
    console.log("error:",err);
})
require('./model/user')

mongoose.model('User')
app.use(express.json())
app.use(require('./routes/setMedicalHistory'))

