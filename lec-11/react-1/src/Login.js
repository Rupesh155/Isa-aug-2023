import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate=useNavigate()
    const [data, setData]=useState({
        email:"",
        passWord:""
    })
    const fun1=(e)=>{
        const {name,value}=e.target
        setData({...data,[name]:value})
    }
    const handleChange=()=>{
        fetch('http://localhost:3000/login',{
            method:"POST",
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((res)=>{
return res.json()
        }).then((resData)=>{
            navigate('/')

            console.log(resData,"resData")
        }).catch((err)=>{
            console.log(err)

        })
    }
  return (
    <div>
        <input type='email' onChange={fun1}  name='email' value={data.email} placeholder='enter your email' />
        <br/>
        <input type='password' onChange={fun1} name='passWord' value={data.passWord} placeholder='enter your password' />
        <br/>
<button onClick={handleChange}> Submit</button>

<Link to='/'> SignUp Page</Link>
    </div>
  )
}

export default Login