import React, {ChangeEvent} from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from '../../common/Preloader/Preloader';
import {ProfileInfoType} from '../../redux/profile-reducer';
import ProfileStatus from './ProfileStatusWithHooks'
import userPhoto from '../../../assets/images/user-png.png';

type ProfileInfoPropsType = {
    savePhoto: (file: File) => void
    isOwner: boolean,
    profile: null | ProfileInfoType,
    status: string,
    updateStatus: (status: string) => void
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = ({isOwner, profile, status, updateStatus, savePhoto}) => {
    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0])
        }
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                {profile.photos &&
                    <img src={profile.photos.large || userPhoto} className={s.mainPhoto} alt=""/>
                }
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                <ProfileStatus status={status} updateStatus={updateStatus}/>
                <div>{profile.fullName}</div>
                <div>{profile.aboutMe}</div>
                {profile.contacts &&
                    <>
                        <div>{profile.contacts.vk}</div>
                        <div>{profile.contacts.instagram}</div>
                    </>

                }
            </div>
        </div>
    )
}

export default ProfileInfo;