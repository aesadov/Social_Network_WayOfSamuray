import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUsersProfile} from '../redux/profile-reducer';
import {AppStateType} from '../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../hoc/withAuthRedirect';

type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type MapDispatchToPropsType = {
    getUsersProfile: (userId: string) => void
}
type PathParamsType = {
    userId: string,
}
type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & MapStateToPropsType & MapDispatchToPropsType
class ProfileContainer extends React.Component <ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.getUsersProfile(userId)
    }

    render () {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default withAuthRedirect(connect(mapStateToProps, {getUsersProfile}) (WithUrlDataContainerComponent))