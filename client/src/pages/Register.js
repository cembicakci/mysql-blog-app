import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Register() {

  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
  }

  console.log(inputs)

  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input required type='text' placeholder='username' name='username' onChange={handleChange}></input>
        <input required type='email' placeholder='email' name='email' onChange={handleChange}></input>
        <input required type='password' placeholder='password' name='password' onChange={handleChange}></input>
        <button onClick={handleSubmit}>Register</button>
        <p>This is an error!</p>
        <span>Do you have account? <Link to='/login'>Login</Link></span>
      </form>
    </div>
  )
}

export default Register