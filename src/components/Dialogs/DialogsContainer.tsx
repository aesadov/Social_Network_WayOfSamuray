import {InitialStateType, sendMessageCreator} from '../redux/dialogs-reducer';
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
    sendMessage: (newMessageBody: string) => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        sendMessage: (newMessageBody: string) => {
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
}

export default  compose<ComponentType>(
    (connect(mapStateToProps, mapDispatchToProps)),
    withAuthRedirect
)(Dialogs)