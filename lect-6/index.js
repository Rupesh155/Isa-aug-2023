const express=require('express')
  const app=express()
  app.use(express.urlencoded({extended:true}))

  let comments=[
    {
        id:0,
        userName:'rupesh',
        comment:"delhi is a nice city"
    },
    {
        id:1,
        userName:'rahul',
        comment:"kanpur is a nice city"
    },
    {
        id:2,
        userName:'rohan',
        comment:"aagra is a nice city"
    },
    {
        id:3,
        userName:'kajal',
        comment:"rajpura is a nice city"
    }
  ]

  app.set('view engine', 'ejs')


//   rest archi

// task 1
app.get('/comments',(req,res)=>{
    res.render('index',{comments})
})

app.get('/comments/new',(req,res)=>{
    res.render('new')
})
app.post('/comments',(req,res)=>{
    const  {userName, comment}=req.body
    comments.push({userName, comment,id:comments.length})
    res.redirect('/comments')
    console.log(req.body)
})

//  to show a particular comment

app.get('/comments/:commentId',(req,res)=>{
    const {commentId}=req.params
    console.log(commentId,"idddddddddddddd")
    let foundComment=comments.find((data)=> data.id===parseInt(commentId))

    console.log(foundComment.username,"heheheh")
    res.render('show',{foundComment})

    // console.log(commentId,"rrrrrrrrrrrrr")
})



  app.listen(5000,()=>{
    console.log('server runing on port no 5000')
  })