import React from 'react'
import { Link } from 'react-router-dom'
import './register.css'

function Register() {
    return (
        <div className='register'>
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label >Username</label>
                <input type="text" placeholder='Enter your Username' />
                <label >Email</label>
                <input type="email" placeholder='Enter your Email' />
                <label >Password</label>
                <input type="password" placeholder='Enter your Password' />
                <button className="registerButton">Register</button>
            </form>
            <button className="loginButton"> <Link to={'/login'}>LOGIN</Link></button>

        </div>
    )
}

export default Register