import React from 'react';
import stl from './MyOnePost.module.css';

const MyOnePost = () => {
    return (
        <div className={stl.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf83IlGU-amh5_VerA7UIcas4p_8z7nmiJUw&usqp=CAU" alt="AvaPost"/>
            Post item 0
        </div>
    );
};

export default MyOnePost;