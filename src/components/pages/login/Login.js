import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'

function Login() {
    return (
        <div className='login'>
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label >Username</label>
                <input type="text" placeholder='Enter your Username' />
                <label >Password</label>
                <input type="password" placeholder='Enter your Password' />
                <button className="loginBtn">Login</button>
            </form>
            <button className="registerBtn"> <Link to={'/register'}>REGISTER</Link></button>

        </div>
    )
}

export default Login