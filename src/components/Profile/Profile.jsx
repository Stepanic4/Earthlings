import React from 'react';
import rustContent from "../../rustContent.jpeg";
import stl from './Profile.module.css';

const Profile = () => {
    return (
        <div className={stl.content}>
            <img src={rustContent} className={stl.rust} alt="rust"/>
            <div className={stl.posts}>
                <p className={stl.posts}>My posts )))</p>
                <div className={stl.item}>
                    Post item 1
                </div>
                <div className={stl.item}>
                    Post item 2
                </div>
                <div className={stl.item}>
                    Post item 3
                </div>

            </div>
        </div>
    );
};

export default Profile;