import React, {ChangeEventHandler, DetailedHTMLProps, TextareaHTMLAttributes} from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {StoreType} from '../redux/state';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../redux/dialogs-reducer';

type DialogsPropsType = {
    store: StoreType
}


const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.store._state.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.store._state.dialogsPage.messages.map(m => <Message message={m.message}/>)
    let newMessageBody = props.store._state.dialogsPage.newMessageBody

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>{dialogsElements}</div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div><textarea placeholder={'Enter your message'}
                               value={newMessageBody}
                               onChange={onNewMessageChange}>1</textarea></div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;