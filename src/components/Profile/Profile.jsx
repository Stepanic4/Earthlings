import React from 'react';
import stl from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={stl.content}>
            <MyPosts/>
        </div>
    );
};

export default Profile;