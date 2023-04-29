import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const SignUp = () => {
    const [input, setInput]=useState({
        firstName:"",
        lastName:"",
        email:"",
        passWord:""
    })
    const fun1=(e)=>{
        // console.log(e.target.value,"")
        const {name,value}=e.target
        setInput({...input,[name]:value})
        console.log(input,"input")


    }
    const handleChange=()=>{
        fetch('http://localhost:3000/register',{
            method:"POST",
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(input)
        }).then(()=>{
            console.log('chal gya')
        }).catch((err)=>{
            console.log(err,"err")
        })
    }
  return (
    <div>
        <h3> form </h3>
        <input type='text' onChange={fun1} name='firstName' value={input.firstName} placeholder='Enter your name'/>
        <br/>
        <input type='text' onChange={fun1} name='lastName' value={input.lastName} placeholder='Enter your lastName'/>
        <br/>
        <input type='email' onChange={fun1} name='email' value={input.email} placeholder='Enter your email'/>
        <br/>
        <input type='passwaord' onChange={fun1} name='passWord' value={input.passWord} placeholder='Enter your pass'/>
        <br/>
        <button onClick={handleChange}> Submit</button>

        <br/>
    {/* <button>login page</button> */}
    <Link to='/login'> login</Link>
    </div>
  )
}

export default SignUp