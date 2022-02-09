import {InitialStateType, sendMessageCreator, updateNewMessageBodyCreator} from '../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../redux/redux-store';
import {compose, Dispatch} from 'redux';
import {withAuthRedirect} from '../hoc/withAuthRedirect';
import {ComponentType} from 'react';

type MapStateToPropsType = {
    dialogsPage: InitialStateType,
    //isAuth: boolean
}
type MapDispatchToProps = {
    updateNewMessageBody: (body: string) => void,
    sendMessage: () => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}

export default  compose<ComponentType>(
    (connect(mapStateToProps, mapDispatchToProps)),
    withAuthRedirect
)(Dialogs)