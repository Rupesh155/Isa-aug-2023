const express=require('express')
const app=express()
const mongoose=require('mongoose')
const router=require('./routes/productRoutes')
let methodOverride = require('method-override');
// app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
const seedDB=require('./seed')
app.set('view engine' ,'ejs')
app.set(express.static('public'))
mongoose.connect('mongodb://127.0.0.1:27017/shoping-app')
.then(()=>{
    console.log('db Connected')
}).catch((err)=>{
    console.log(err)
})
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(router)
// seedDB()

// app.get('/',(req,res)=>{
//     res.send('hell')
// })
const port=5000
app.listen(port,()=>{
    console.log(`Server running on port no ${port}`)
})