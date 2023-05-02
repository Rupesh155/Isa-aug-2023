const express=require('express')
const Product=require('../modejs/product')
const router=express.Router()
router.get('/product', async(req,res)=>{
       const products= await Product.find({})
       res.render('index',{products})
       // console.log(products,"products")

})
module.exports=router