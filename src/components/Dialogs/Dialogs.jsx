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

    let dialogsData = [
        {id: 1, name: 'Ivan'},
        {id: 2, name: 'Lena'},
        {id: 3, name: 'Arnold'},
        {id: 4, name: 'Michal'},
        {id: 5, name: 'Sara'},
        {id: 6, name: 'Ura'},
        {id: 7, name: 'Dasha'}
    ];

    let messagesData = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Everything is ok'},
        {id: 4, message: 'My name Petr'},
        {id: 5, message: 'If you want?'},
        {id: 6, message: 'Little car'},
        {id: 7, message: 'Friends is happy'}
    ];

    return (
        <div className={stl.dialogs}>
            <div className={stl.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
            </div>
            <div className={stl.messages}>
                <Message message={messagesData[0].message} id={messagesData[0].id}/>
                <Message message={messagesData[1].message} id={messagesData[1].id}/>
            </div>
        </div>
    );
};

export default Dialogs;