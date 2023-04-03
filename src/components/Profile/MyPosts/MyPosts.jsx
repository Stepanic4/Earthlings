import React from 'react';
import stl from './MyPosts.module.css';
import MyOnePost from '../MyPosts/MyOnePost/MyOnePost';

const MyPosts = () => {
    return (
        <div className={stl.posts}>
            <div>
                <div className={stl.textAreaPost}>
                    <textarea name="post" id="areaPost" cols="30" rows="4" placeholder='Please enter your post...'>
                    </textarea>
                    <button className={stl.myButton}>Add post</button>
                </div>
            </div>
            <div>
                <h4>My posts )))</h4>
                <MyOnePost message='Hello my friend' likesCount='2'/>
                <MyOnePost message='What are you doing ?' likesCount='4'/>
                <MyOnePost message='Fine, working and learning ?' likesCount='7'/>
            </div>
        </div>
    );
};

export default MyPosts;