import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {ProfileInfoType, setUsersProfile} from '../redux/profile-reducer';
import {AppStateType} from '../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';

type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type MapDispatchToPropsType = {
    setUsersProfile: (profile: ProfileInfoType) => void
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
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(responce => {
                this.props.setUsersProfile(responce.data)
            })
    }

    render () {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUsersProfile}) (WithUrlDataContainerComponent)