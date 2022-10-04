import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {


  const [inputs, setInputs] = useState({
    username: '',
    password: ''
  })

  const [err, setErr] = useState('')
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs)
    try {
      const res = await axios.post('/auth/login', inputs)
      navigate('/')
    } catch (err) {
      console.log(err)
      setErr(err.response.data)
    }
  }



  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input required type='text' placeholder='username' name='username' onChange={handleChange}></input>
        <input required type='password' placeholder='password' name='password' onChange={handleChange}></input>
        <button onClick={handleSubmit}>Login</button>
        {err && <p>{err}</p>}
        <span>Don't you have account? <Link to='/register'>Register</Link></span>
      </form>
    </div>
  )
}

export default Login