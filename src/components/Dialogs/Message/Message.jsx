import stl from '../Dialogs.module.css';
import React from "react";

const Message = (props) => {
    return <div className={stl.dialog}>
        {props.message}
    </div>
};

export default Message;