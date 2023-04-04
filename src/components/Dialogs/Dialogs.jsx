import React from 'react';
import stl from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Ivan'},
        {id: 2, name: 'Lena'},
        {id: 3, name: 'Arnold'},
        {id: 4, name: 'Michal'},
        {id: 5, name: 'Sara'},
        {id: 6, name: 'Ura'},
        {id: 7, name: 'Dasha'}
    ];

    let messages = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Everything is ok'},
        {id: 4, message: 'My name Petr'},
        {id: 5, message: 'If you want?'},
        {id: 6, message: 'Little car'},
        {id: 7, message: 'Friends is happy'}
    ];

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messages.map(m => <Message message={m.message} id={m.id}/>);

    return (
        <div className={stl.dialogs}>
            <div className={stl.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={stl.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;