import React from 'react';
import stl from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPageState.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.dialogsPageState.messages.map(m => <Message message={m.message} id={m.id}/>);
    let newMessageBody = props.dialogsPageState.newMessageBody;

    // let newMessageElement = React.createRef();
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    };

    let onNewMessageChange = (e) => {
        let txBody = props.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(txBody))
    };

    return (
        <div className={stl.dialogs}>
            <div className={stl.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={stl.messages}>
                {messagesElements}
            </div>
            <div className={stl.textAreaMessage}>
                <textarea value={newMessageBody}
                          onChange={onNewMessageChange}
                          name="message" cols="30"
                          rows="4"
                          placeholder="Please enter your message.."/>
                <button className={stl.myMessageButton} onClick={onSendMessageClick}>
                    Add message
                </button>
            </div>
        </div>
    );
};

export default Dialogs;