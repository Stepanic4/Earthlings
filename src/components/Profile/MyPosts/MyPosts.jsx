import React from 'react';
import stl from './MyPosts.module.css';
import MyOnePost from '../MyPosts/MyOnePost/MyOnePost';

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <MyOnePost message={p.message} likesCount={p.likesCount}/>);

    return (
        <div className={stl.posts}>
            <div className={stl.textAreaPost}>
                    <textarea name="post" id="areaPost" cols="30" rows="4" placeholder='Please enter your post...'>
                    </textarea>
                <button className={stl.myButton}>Add post</button>
            </div>
            <div>
                <h4>My posts )))</h4>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;