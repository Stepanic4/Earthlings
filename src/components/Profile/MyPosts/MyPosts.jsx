import React from 'react';
import stl from './MyPosts.module.css';
import MyOnePost from '../MyPosts/MyOnePost/MyOnePost';

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <MyOnePost message={p.message} likesCount={p.likesCount}/>);

    let addPost = () => {
        let text = newPostElement.current.value;
        alert (text)
    };

    let newPostElement = React.createRef();

    return (
        <div className={stl.posts}>
            <div className={stl.textAreaPost}>
                    <textarea ref={newPostElement} name="post" cols="30" rows="4" placeholder='Please enter your post...'>
                    </textarea>
                <button className={stl.myButton} onClick={ addPost }>Add post</button>
            </div>
            <div>
                <h4>My posts )))</h4>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;