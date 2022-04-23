import React from 'react'
import './post.css'
import p2 from '../../../assets/p2.jpg'

function Post() {
  return (
    <div className="post">
      <img className='postImg' src={p2} alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postcat">Travel</span>
          <span className="postcat">Nature</span>
          <span className="postcat">Music</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet.</span>
        <hr />
        <span className="postDate">
        1 hour ago
        </span>
        <p className="postDesc">
        Lorem ipsum dolor sit amet consec adipis elit. Deserunt earum dolor reicien, corporis voluptas soluta quae harum exped minus omnis eius nost animi tenetur pariatur rem fugiat optio maxime volupta quam labore blandits libero unde. Debitis aut rem recusan explica. Lorem ipsum dolor sit amet consec adipis elit. Deserunt earum dolor reicien, corporis voluptas soluta quae harum exped minus omnis eius nost animi tenetur pariatur rem fugiat optio maxime volupta quam labore blandits libero unde. Debitis aut rem recusan explica. Lorem ipsum dolor sit amet consec adipis elit. Deserunt earum dolor reicien, corporis voluptas soluta quae harum exped minus omnis eius nost animi tenetur pariatur rem fugiat optio maxime volupta quam labore blandits libero unde. Debitis aut rem recusan explica. Lorem ipsum dolor sit amet consec adipis elit. Deserunt earum dolor reicien, corporis voluptas soluta quae harum exped minus omnis eius nost animi tenetur pariatur rem fugiat optio maxime volupta quam labore blandits libero unde. Debitis aut rem recusan explica. Lorem ipsum dolor sit amet consec adipis elit. Deserunt earum dolor reicien, corporis voluptas soluta quae harum exped minus omnis eius nost animi tenetur pariatur rem fugiat optio maxime volupta quam labore blandits libero unde. Debitis aut rem recusan explica.</p>
</div>
      </div>
  );
}
 
export default Post; 