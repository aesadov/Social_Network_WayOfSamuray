import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../redux/StoreContext';


const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {(store) => {

            let state = store.getState()

            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator())
            }

            let onNewMessageChange = (body: string) => {
                store.dispatch(updateNewMessageBodyCreator(body))
            }

            return <Dialogs state={state}
                            sendMessage={onSendMessageClick}
                            updateNewMessageBody={onNewMessageChange}/>
        }
        }
    </StoreContext.Consumer>
}

export default DialogsContainer;