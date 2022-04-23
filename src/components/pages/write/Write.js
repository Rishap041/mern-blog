import React from 'react'
import './write.css'
import p2 from '../../../assets/p2.jpg'

function Write() {
    return (
        <div className='write'>
        <img src={p2} alt="" className="writeImg" />
            <form className="writeForm">
                <div className="writeformGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id='fileInput' className='writeFile' />
                    <input type="text" placeholder='Title' className='writeTitle' autoFocus={true} />
                </div>
                <div className="writeformGroup">
                    <textarea placeholder='Tell your story' type='text' className='writeText'>
                    </textarea>
                </div>
                <button className="writeSubmit">
                    Publish
                </button>
            </form>
        </div>
    )
}

export default Write