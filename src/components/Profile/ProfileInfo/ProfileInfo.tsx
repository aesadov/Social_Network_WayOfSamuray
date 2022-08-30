import React from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from '../../common/Preloader/Preloader';
import {ProfileInfoType} from '../../redux/profile-reducer';
import ProfileStatus from './ProfileStatusWithHooks'

type ProfileInfoPropsType = {
    profile: null | ProfileInfoType,
    status: string,
    updateStatus: (status: string) => void
}

const ProfileInfo = ({profile, status, updateStatus}: ProfileInfoPropsType) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large} alt=""/>
                <ProfileStatus status={status} updateStatus={updateStatus}/>
                <div>{profile.fullName}</div>
                <div>{profile.aboutMe}</div>
                <div>{profile.contacts.vk}</div>
                <div>{profile.contacts.instagram}</div>
            </div>
        </div>
    )
}

export default ProfileInfo;