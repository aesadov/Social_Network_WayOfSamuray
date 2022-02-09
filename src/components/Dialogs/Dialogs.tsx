import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {InitialStateType} from '../redux/dialogs-reducer';

type DialogsPropsType = {
    dialogsPage: InitialStateType
    sendMessage: () => void
    updateNewMessageBody: (body: string) => void
    isAuth: boolean
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>)
    let newMessageBody = props.dialogsPage.newMessageBody

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
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