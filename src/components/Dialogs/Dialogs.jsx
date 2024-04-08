import React from 'react';
import stl from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPageState.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.dialogsPageState.messages.map(m => <Message message={m.message} id={m.id}/>);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessage();
    };

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
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
                <textarea onChange={onMessageChange}
                          ref={newMessageElement}
                          value={props.newMessageTx}
                          name="message" cols="30"
                          rows="4"
                          placeholder="Please enter your message.."/>
                <button className={stl.myMessageButton} onClick={addMessage}>
                    Add message
                </button>
            </div>
        </div>
    );
};

export default Dialogs;