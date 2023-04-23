import React from 'react';
import stl from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div className={stl.profile}>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts} addPost={props.addPost} />
        </div>
    );
};

export default Profile;