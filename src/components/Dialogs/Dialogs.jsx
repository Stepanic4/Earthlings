import React from 'react';
import stl from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return <div className={stl.dialog + ' ' + stl.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
};

const Message = (props) => {
    return <div className={stl.dialog}>
        {props.message}
    </div>
};

const Dialogs = () => {
    return (
        <div className={stl.dialogs}>
            <div className={stl.dialogsItems}>
                <DialogItem name="Ivan" id="1" />
                <DialogItem name="Lena" id="2" />
                <DialogItem name="Arnold" id="3" />
                <DialogItem name="Michal" id="4" />
                <DialogItem name="Sara" id="5" />
                <DialogItem name="Ura" id="6" />
                <DialogItem name="Dasha" id="7" />
            </div>
            <div className={stl.messages}>
                <Message message="Hello"/>
                <Message message="How are you"/>
                <Message message="Everything is ok"/>
                <Message message="My name Petr"/>
                <Message message="If you want?"/>
                <Message message="Little car"/>
                <Message message="Friends is happy"/>
            </div>
        </div>
    );
};

export default Dialogs;