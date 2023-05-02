const mongoose=require('mongoose');

const productSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    img:{
        type:String
    },
    price:{
        type:Number,
        min:0,
        required:true
    },
    desc:{
        type:String,
        required:true
    }

})
const Product=mongoose.model('Product',productSchema)
module.exports=Product