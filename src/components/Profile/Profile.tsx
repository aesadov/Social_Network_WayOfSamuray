import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPostsContainer';
import {ProfileInfoType} from '../redux/profile-reducer';

type ProfilePropsType = {
    savePhoto: (file: File) => void
    isOwner: boolean,
    profile: null | ProfileInfoType,
    status: string,
    updateStatus: (status: string) => void
}

const Profile = (props: ProfilePropsType) => {
    return (

        <div>
            <ProfileInfo
                savePhoto={props.savePhoto}
                isOwner={props.isOwner}
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
            />
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;