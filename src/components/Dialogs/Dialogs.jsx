import React from 'react';
import stl from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.state.messages.map(m => <Message message={m.message} id={m.id}/>);

    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert (text)
    };

    let newMessageElement = React.createRef();

    return (
        <div className={stl.dialogs}>
            <div className={stl.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={stl.messages}>
                {messagesElements}
            </div>
            <div className={stl.textAreaMessage}>
                <textarea ref={newMessageElement} name="message" cols="30" rows="4" placeholder="Please enter your message.."/>
                <button className={stl.myMessageButton} onClick={addMessage}>
                    Add message
                </button>
            </div>
        </div>
    );
};

export default Dialogs;