import React from 'react'
import './sidebar.css'

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img className='sidebarImg' src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum omnis doloremque molestias consequuntur sequi ad reprehenderit porro iste, dolorum voluptate!</p>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Sports</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Movie</li>
                    <li className="sidebarListItem">Tech</li>
                </ul>

            </div>

            <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-facebook-f"></i>
            <i className="sidebarIcon fa-brands fa-instagram"></i>
            <i className="sidebarIcon fa-brands fa-twitter"></i>
            <i className="sidebarIcon fa-brands fa-linkedin-in"></i>
            </div>
        </div>
        </div>
    )
}

export default Sidebar