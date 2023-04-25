const mongoose=require('mongoose') 
 const userSchema=  mongoose.Schema({
        firstName:{
            type:String,
            required:true
        },
        lastName:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        passWord:{
            type:String,
            require:true
        }
    })
    const User=mongoose.model('User',userSchema)
    module.exports=User
