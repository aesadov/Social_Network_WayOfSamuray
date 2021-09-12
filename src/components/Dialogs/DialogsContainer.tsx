import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../redux/dialogs-reducer';
import {AppStateType, DispatchType} from '../redux/redux-store';
import Dialogs from './Dialogs';

type DialogsContainerPropsType = {
    state: AppStateType,
    dispatch: DispatchType
}


const DialogsContainer = (props: DialogsContainerPropsType) => {

    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (body: string) => {
        props.dispatch(updateNewMessageBodyCreator(body))
    }

    return <Dialogs state={props.state}
                    sendMessage={onSendMessageClick}
                    updateNewMessageBody={onNewMessageChange}/>
}

export default DialogsContainer;