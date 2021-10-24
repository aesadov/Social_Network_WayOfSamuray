import React from 'react';
import s from './../Dialogs.module.css';

type propsTypeMessage = {
    message: string
}


const Message = (props: propsTypeMessage) => {
    return <div className={s.message}>{props.message}</div>
}



export default Message;