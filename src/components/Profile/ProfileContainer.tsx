import React, {ComponentType} from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getStatus, getUsersProfile, ProfileInfoType, updateStatus} from '../redux/profile-reducer';
import {AppStateType} from '../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from 'redux';

type MapStateToPropsType = {
    profile: null | ProfileInfoType,
    status: string,
    authorizedUserId: string,
    isAuth: boolean,
}
type MapDispatchToPropsType = {
    getUsersProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
}
type PathParamsType = {
    userId: string,
}
type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & MapStateToPropsType & MapDispatchToPropsType


class ProfileContainer extends React.Component <ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId // '20235' - мой id
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUsersProfile(userId)
        this.props.getStatus(userId)
    }

    render () {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
})

export default compose<ComponentType>(
    connect(mapStateToProps, {getUsersProfile, getStatus, updateStatus}),
    withRouter,
   //    withAuthRedirect
)(ProfileContainer)