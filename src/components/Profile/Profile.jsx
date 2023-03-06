import React from 'react';
import rustContent from "../../rustContent.jpeg";
import './Profile.css';

const Profile = () => {
    return (
        <div className="content">
            <img src={rustContent} className="rust" alt="rust"/>
            <div className="my-posts">
                My posts )))
                <div className="item">
                    Post item 1
                </div>
                <div className="item">
                    Post item 2
                </div>
                <div className="item">
                    Post item 3
                </div>

            </div>
        </div>
    );
};

export default Profile;