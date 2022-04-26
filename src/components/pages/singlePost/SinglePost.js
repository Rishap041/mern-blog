import React, { useEffect, useState } from 'react'
import './singlePost.css'
import p2 from '../../../assets/p2.jpg'
import { Link, useLocation } from 'react-router-dom'
import axios from "axios";

function SinglePost() {
    const host = "http://localhost:5000/api";
    const location = useLocation();
    const userId = location.pathname.split("/")[2];
   
    const [data,setData] = useState({});

    useEffect(() => {
        const fetchPost = async () => {
            const res = await axios.get(`${host}/posts/${userId}`);
            setData(res.data);
            //.log(res.data);
        }
        fetchPost();
      // eslint-disable-next-line 
    }, [userId])

    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                <img src={p2} alt="" className="singlePostImg" />

                <h2 className="singlePostTitle">{data.title}
                    <div className="singlePostEdit">
                        <i className="singlePostIcon singlePostIconEdit fa-solid fa-pen-to-square"></i>
                        <i className="singlePostIcon singlePostDel fa-solid fa-trash-can"></i>
                    </div>
                </h2>

                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author :<Link to={`/?user=${data.username}`}> {data.username}</Link></span>
                    <span className="singlePostDate">{new Date(data.createdAt).toDateString()}</span>
                </div>
                <p className="singlePostContent">
                   {data.desc}
                </p>

            </div>
        </div>
    )
}

export default SinglePost