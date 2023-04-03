import React from 'react';
import stl from './MyOnePost.module.css';

const MyOnePost = (props) => {
    return (
        <div className={stl.item}>
            <img
                src="https://a.d-cd.net/-Nw4NUI84DSlQW5m8d4vKH7MbxU-1920.jpg"
                alt="AvaPost"/>
            <div className={stl.likePost}>
                {props.message}
                <div className={stl.like}>
                    Like {props.likesCount}
                </div>
            </div>
        </div>
    );
};

export default MyOnePost;