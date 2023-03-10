import React from 'react';
import stl from './MyOnePost.module.css';

const MyOnePost = (props) => {
    return (
        <div className={stl.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf83IlGU-amh5_VerA7UIcas4p_8z7nmiJUw&usqp=CAU"
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