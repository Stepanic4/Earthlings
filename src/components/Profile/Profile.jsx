import React from 'react';
import rustContent from "../../rustContent.jpeg";
import stl from './Profile.module.css';

const Profile = () => {
    return (
        <div className={stl.content}>
            <div>
                <img src={rustContent} className={stl.rust} alt="rust"/>
            </div>
            <div className={stl.item}>
                <img src="https://www.meme-arsenal.com/memes/a323140cb815b9f6334d34303bb35d93.jpg" alt="avatar"/>
                Description
            </div>
            <div className={stl.posts}>
                <h4>
                    My posts )))
                </h4>
                <textarea name="post" id="areaPost" cols="30" rows="4" placeholder='Please enter your post...'>
                </textarea>
                <button>Add post</button>
                <div className={stl.item}>
                    Post item
                </div>
            </div>
        </div>
    );
};

export default Profile;