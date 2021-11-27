import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {ProfileInfoType, setUsersProfile} from '../redux/profile-reducer';
import {AppStateType} from '../redux/redux-store';

type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType
type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type MapDispatchToPropsType = {
    setUsersProfile: (profile: ProfileInfoType) => void
}

class ProfileContainer extends React.Component <ProfileContainerPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

export default connect(mapStateToProps, {setUsersProfile}) (ProfileContainer)