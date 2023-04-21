const express=require('express')
const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/aug23')
.then(()=>{
    console.log('db conneted')
}).catch((err)=>{
    console.log(err)
})
const app=express()

// Schema

const  movieSchema=mongoose.Schema({
    name:String,
    rating:Number,
    year:Number

})
//  creating model

const Movie=mongoose.model('Info',movieSchema)
  
const  ironMan =new Movie({name:"ironMan",year:2016,rating:9})
ironMan.save()
app.get('/',(req,res)=>{
    res.send('hello')
})

app.listen(4000,()=>{
    console.log('server running on port no. 400')
})