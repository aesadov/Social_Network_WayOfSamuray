import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPostsContainer';
import {ProfileInfoType} from '../redux/profile-reducer';

type ProfilePropsType = {
    profile: null | ProfileInfoType
}

const Profile = (props: ProfilePropsType) => {
    return (

        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;