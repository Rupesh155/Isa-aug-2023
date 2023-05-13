const express=require('express')
const Product=require('../modejs/product')
const router=express.Router()
router.get('/product', async(req,res)=>{
       const products= await Product.find({})
       res.render('index',{products})
       // console.log(products,"products")
})

router.get('/product/new',(req, res)=>{
       res.render('new')
})

router.post('/product', async(req, res)=>{
     let {name, img, price, desc} = req.body
      await Product.create({name, img, price, desc});
      res.redirect('/product')


})
router.get('/product/:id', async(req,res)=>{
       let {id}=req.params;
      let foundProduct=  await Product.findById(id)
      res.render('show',{foundProduct})

})

router.get('/product/:id/edit' , async(req,res)=>{
       let {id}=req.params;
       console.log(id,"rrrrrr")
       let foundProduct=  await Product.findById(id)
      res.render('edit',{foundProduct})

})
router.patch('/product/:id' , async(req,res)=>{
       let {id} = req.params;
       let {name,img,price,desc} = req.body;
       await Product.findByIdAndUpdate(id , {name,img,price,desc});
       res.redirect(`/product/${id}`)
   })
   
   router.delete('/product/:id' , async(req,res)=>{
       let {id} = req.params;
       await Product.findByIdAndDelete(id);
       res.redirect('/product');
   })


 

module.exports=router