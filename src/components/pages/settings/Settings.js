import React from 'react'
import './settings.css'
import Sidebar from '../sidebar/Sidebar'

function Settings() {
    return (
        <div className='settings'>
            <div className="settingsWrapper">
                <div className="settingtitle">
                    <span className="settingsUpdateTitle">Update Account</span>
                    <span className="settingsDeleteTitle"><i class="settingsDeleteIcon fa-solid fa-trash-can"></i>Delete Account</span>
                </div>


                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img className='settingsImg' src="https://ritecaremedicalofficepc.com/wp-content/uploads/2019/09/img_avatar.png" alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fa-solid fa-circle-user"></i>
                        </label>
                        <input type="file" id='fileInput' className='settingsFileInput' />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder='Rishap' />
                    <label>Email</label>
                    <input type="email" placeholder='rishap@test.com' />
                    <label>Password</label>
                    <input type="password" />
                    <button className="settingSumit"> update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}

export default Settings