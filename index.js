
// setTimeout(()=>{
//     console.log('hello')
// },1000) 
// console.log('hello1')


// create 
// const fs=require('fs')
// fs.writeFile('app.txt',"new data add ho gya",(err)=>{
//     if(err) throw err
//     console.log('koi err nhi hai code me ')
// })

// read
// fs.readFile('app.txt',(err,data)=>{
//     if(err) throw err
//     console.log(data.toString())

// })
//  fs.appendFile('app.txt',"\nupdated data ",(err)=>{
//     if(err) throw err
//     console.log('data updated')
//  })

// delet

// fs.unlink('app.txt',(err)=>{
//     if(err) throw err
//     console.log('file deleted')
//
// const http=require('http')

//   const Server =http.createServer((req,res)=>{
//     res.end('hello res aa gya')
// })
// Server.listen(8080,()=>{
//     console.log('Server running on port no 8080')
// })
// const joke=require('give-me-a-joke')
// joke.getRandomDadJoke((data)=>{
//     console.log(data)

// })
//    const color=require('color')
//    color('hello',(err,data)=>{
//     console.log(data)
//    })

// const figlet=require('figlet')
// const color=require('colors')
// figlet('rupesh',(err,data)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(data.rainbow)
// })
// const express=require('express')
//       const app = express()
//     //   app.use((req,res)=>{
//     //     res.send('hello this is express')
//     //   })
//     app.get('/',(req,res)=>{
//         res.send('hello home page')
//     })
//     app.post('/cat',(req,res)=>{
//         res.send('<h3>meow </h3>')
//     })
//     app.get('/dog',(req,res)=>{
//         res.send("<h4> woof woof </h4>")
//     })
//       app.listen(4000,()=>{
//         console.log('Server running on port no 4000')
//       })
//     //   console.log(app)


// lec-4


// const express=require('express')
// const app=    express()

//   app.get('/',(req,res)=>{
//     res.send('home')
//   })

//   app.get('/home/:rachit/',(req,res)=>{
//      const  {rachit} = req.params
//     res.send(`${rachit}`)
//   })

//   app.get('/search',(req,res)=>{
//   const   {name,last}= req.query
//     res.send(`${name} and ${last}`)
//   })

//   app.listen(4000,()=>{
//     console.log('server running on port no 4000')
//   })


// lec-5

// const express=require('express')

// const app=express()

// // app.use(express.json())
// app.use(express.urlencoded({extended:true}))

// const arr=['gym', 'dog', 'car', 'cat']

// app.set('view engine' , 'ejs')

// app.get('/',(req,res)=>{
//     res.render('index')
//     // res.send('hello')
// })

// app.get('/user',(req,res)=>{
//     const {username, age} = req.query
//     res.send(`${username} and ${age}`)
// })

//  app.post('/user',(req,res)=>{
//     const {username,age}=req.body
//     // console.log(user)
//     res.send(`${username} and ${age}`)

//  })

// app.get('/r',(req,res)=>{
//     const randomNum=Math.floor(Math.random()*50)
//     res.render('random',{randomNum})
// })

// app.get('/todo',(req,res)=>{
//     res.render('todo',{arr})
// })


// app.listen(4000,()=>{
//     console.log('server running on port no 4000')
// })


// lect-7

const express=require('express')
  const app= express()

  app.set('view engine', 'ejs')

  // app.use( '/static' ,express.static('public'))


  app.get('/',(req,res)=>{
    res.render('index')
  })

  app.listen(4000,()=>{
    console.log('server runing on port on 4000')
  })


               
                                         

                 
                           

      
                  










  





