import React from 'react'
import SignUp from './SignUp'
import Login from './Login'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
const App = () => {
  return (
    <div>
      <Routes>
      <Route  path='/' element={<Home/>}/>
        <Route  path='/signup' element={<SignUp/>}/>
        <Route  path='/login' element={<Login/>}/>
      

      </Routes>
    
    </div>
  )
}
export default App