import React from "react";
import stl from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return (
        <div className={stl.item}>
            <img className={stl.postsAva}
                 src="https://a.d-cd.net/tQAAAgGZteA-100.jpg" alt="avatar"/>
            + Mercedes CLK 200
        </div>
    )
};

export default ProfileInfo;