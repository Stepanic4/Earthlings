import React from 'react';
import stl from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={stl.dialogs}>
            <div className={stl.dialogsItems}>
                <div className={stl.dialog + ' ' + stl.active}>Ivan</div>
                <div className={stl.dialog}>Lena</div>
                <div className={stl.dialog}>Michal</div>
                <div className={stl.dialog}>Arnold</div>
            </div>
            <div className={stl.messages}>
                <div className={stl.message}>Hello</div>
                <div className={stl.message}>How are you</div>
                <div className={stl.message}>Everything is ok</div>
            </div>
        </div>
    );
};

export default Dialogs;