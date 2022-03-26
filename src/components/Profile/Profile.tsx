import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPostsContainer';
import {ProfileInfoType} from '../redux/profile-reducer';

type ProfilePropsType = {
    profile: null | ProfileInfoType,
    status: string,
    updateStatus: (status: string) => void
}

const Profile = (props: ProfilePropsType) => {
    return (

        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;