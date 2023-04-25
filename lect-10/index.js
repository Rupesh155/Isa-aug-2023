const express=require('express')
const User=require('./models/user')
const bcrypt=require('bcrypt')
const mongoose=require('mongoose')
const app=express()
const bodyparser=require('body-parser')
const jwt= require('jsonwebtoken')
const generateAuthToken=require('./jwtToken')
const urlencodedParser=bodyparser.urlencoded({extended:true})
app.use(bodyparser.json(),urlencodedParser)
mongoose.connect('mongodb://127.0.0.1:27017/Isa-aug').then(()=>{
    console.log('data base conn. ')
}).catch((err)=>{
    console.log(err)

})

//  app.use(express.urlencoded({extended:true}))

//  app.get('/',(req,res)=>{
//     res.send('hello')

//  })

// api for signup

app.post('/register', async(req,res)=>{
    const user=req.body
    console.log(user,"user")
      const Email= await User.findOne({email:user.email})
      console.log(Email,"rrrrrr")
      if(Email){
        res.send('user is already register in our database')
      }
      else{
        console.log(user.passWord,"user,passss")
          user.passWord=  await bcrypt.hash(req.body.passWord,10)
        console.log(user.passWord,"user,passss")
          const dbUser=  new User({
                firstName:user.firstName,
                lastName:user.lastName,
                email:user.email,
                passWord:user.passWord
              })
              await dbUser.save()
              res.json({msg:'SignUp ho chuka hai sahi se '})
      }



})


// login api 



app.post('/login', async(req,res)=>{
    const userInfo=req.body
    let userData
    try{
         userData= await  User.findOne({email:userInfo.email}) 
    }
    catch(err){
        console.log(err,"while matching email in database")

    }

    if(!userData){
        res.status(401).json({msg:"Invalid Email or passWord"})

    }
          const validPass= await bcrypt.compare(userInfo.passWord,userData.passWord).catch((err)=>{
            console.log(err,"err while hashing")
            res.status(500).send({msg:"Internal server err"})

           })

        if(!validPass){
            res.status(401).send({msg:"Invalid passWord"})
        }
      const token=  generateAuthToken(userData)
    return  res.status(200).send({
        data:{
            token:token,userData:userData
        },
        msg:"Logged in successfully"
    })






})


 app.listen(3000,()=>{
    console.log('server running on port no 3000')
 })