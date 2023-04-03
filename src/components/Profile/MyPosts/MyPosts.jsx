import React from 'react';
import stl from './MyPosts.module.css';
import MyOnePost from '../MyPosts/MyOnePost/MyOnePost';

const MyPosts = () => {

    let postData = [
        {id: 1, message: 'Hello my friend', likesCount: 2},
        {id: 2, message: 'What are you doing ?', likesCount: 5},
        {id: 3, message: 'Fine, working and learning ?', likesCount: 8},
        {id: 4, message: 'This is your car ?', likesCount: 14}
    ];

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
                <MyOnePost message={postData[0].message} likesCount={postData[0].likesCount}/>
                <MyOnePost message={postData[1].message} likesCount={postData[1].likesCount}/>
            </div>
        </div>
    );
};

export default MyPosts;