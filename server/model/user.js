const mongoose =require('mongoose');
//const{ObjectId}= mongoose.Schema.Types
const userSchema = new mongoose.Schema({
name:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true
},

medicalHistory:[{
    medicineName:{
        type:String
    },
    repetitionCount:{
        type:Number,
        required:true
    },
     dose:{
        type: String,
        
    },
}]

})

mongoose.model("User",userSchema);
