import React from 'react';
import stl from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

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