import React from 'react'
import { Link } from 'react-router-dom'
import './topbar.css'
function Topbar() {
  const user = false;
  return (
    <div className='top'>
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook-f"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-linkedin-in"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to={'/'}>HOME</Link>
          </li>
          <li className="topListItem"><Link to={'/'}>ABOUT</Link></li>
          <li className="topListItem"><Link to={'/'}>CONTACT</Link></li>
          <li className="topListItem"><Link to={'/write'}>WRITE</Link></li>
          <li className="topListItem">{user && "LOGOUT"}</li>

        </ul>
      </div>
      <div className="topRight">
        {
          user ? (
            <img className='topImg' src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg" alt="" />
          ) :
            (
              <ul className='topList'>
                <li className="topListItem">
                  <Link to={'/login'}>LOGIN</Link>
                </li>
                <li className="topListItem">
                  <Link to={'/register'}>REGISTER</Link>
                </li>


              </ul>
            )

        }
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>

      </div>
    </div>
  )
}

export default Topbar