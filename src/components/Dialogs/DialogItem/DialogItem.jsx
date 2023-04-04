import React from 'react';
import stl from '../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return <div className={stl.dialog + ' ' + stl.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
};

export default DialogItem;