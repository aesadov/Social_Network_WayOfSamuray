import React, {ComponentType} from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {
    getStatus,
    getUserProfile,
    ProfileInfoType,
    safeProfile,
    savePhoto,
    updateStatus
} from '../redux/profile-reducer';
import {AppStateType} from '../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {ProfileDataFormType} from './ProfileInfo/ProfileDataForm';

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
    savePhoto: (file: File) => void
    safeProfile: (profile: ProfileDataFormType) => Promise<any>
}
type PathParamsType = {
    userId: string,
}
type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & MapStateToPropsType & MapDispatchToPropsType


class ProfileContainer extends React.Component <ProfileContainerPropsType> {

    refreshProfile() {
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

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<ProfileContainerPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile {...this.props}
                     isOwner={!this.props.match.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     savePhoto={this.props.savePhoto}
                     safeProfile={this.props.safeProfile}/>
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
    connect(mapStateToProps, {getUsersProfile: getUserProfile, getStatus, updateStatus, savePhoto, safeProfile}),
    withRouter,
    //    withAuthRedirect
)(ProfileContainer)