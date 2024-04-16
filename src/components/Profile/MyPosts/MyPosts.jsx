import React from 'react';
import stl from './MyPosts.module.css';
import MyOnePost from '../MyPosts/MyOnePost/MyOnePost';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <MyOnePost message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    };

    return (
        <div className={stl.posts}>
            <div className={stl.textAreaPost}>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}
                              name="post" cols="30" rows="4" placeholder='Please enter your post...' />
                <button className={stl.myButton} onClick={addPost}>
                    Add post
                </button>
            </div>
            <div>
                <h4>My posts )))</h4>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;