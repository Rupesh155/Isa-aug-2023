const express= require('express')
const app=  express()
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs')
app.use(express.static('public'))

let Todos= ['delhi ', 'aagra','kanpur',"dello"]

app.get('/',(req,res)=>{
    res.send('Csr vs SSR')
})

app.get('/todo',(req,res)=>{
    if(req.xhr){
        console.log('Ajex request hai')
        res.json(Todos)
    }
    else{
        console.log('normal reuqest')
        res.render('todo',{todos:Todos})
    }
   

})


app.post('/todos',(req,res)=>{
    let {todo}=req.body
    Todos.push(todo)
    res.status(200).json({msg:"todos added succesfully"})
})

app.listen(5050,()=>{
    console.log('server running on port no 5050')
})