import {InitialStateType, sendMessageCreator, updateNewMessageBodyCreator} from '../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../redux/redux-store';
import {Dispatch} from 'redux';
import {withAuthRedirect} from '../hoc/withAuthRedirect';

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

const DialogsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs))

export default DialogsContainer;