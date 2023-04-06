import React from 'react';
import stl from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    let posts = [
        {id: 1, message: 'Hello my friend', likesCount: 2},
        {id: 2, message: 'What are you doing ?', likesCount: 5},
        {id: 3, message: 'Fine, working and learning ?', likesCount: 8},
        {id: 4, message: 'This is your car ?', likesCount: 14}
    ];

    return (
        <div className={stl.profile}>
            <ProfileInfo/>
            <MyPosts posts={posts} />
        </div>
    );
};

export default Profile;