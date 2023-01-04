import React, {ChangeEvent, useState} from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from '../../common/Preloader/Preloader';
import {ContactsType, ProfileInfoType} from '../../redux/profile-reducer';
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import userPhoto from '../../../assets/images/user-png.png';
import ProfileDataReduxForm, {ProfileDataFormType} from './ProfileDataForm';

type ProfileInfoPropsType = {
    savePhoto: (file: File) => void
    isOwner: boolean,
    profile: null | ProfileInfoType,
    status: string,
    updateStatus: (status: string) => void
    safeProfile: (profile: ProfileDataFormType) => Promise<any>
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = ({
                                                         isOwner,
                                                         profile,
                                                         status,
                                                         updateStatus,
                                                         savePhoto,
                                                         safeProfile
                                                     }) => {
    const [editeMode, setEditeMode] = useState<boolean>(false)

    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (profile: ProfileDataFormType) => {
        safeProfile(profile).then(() => {
                setEditeMode(false)
            }
        )
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                {profile.photos &&
                    <img src={profile.photos.large || userPhoto} className={s.mainPhoto} alt=""/>
                }
                {isOwner && <span className={s.inputFile}>
                    <input type={'file'} id='input__file' onChange={onMainPhotoSelected}/>
                    <label htmlFor='input__file' className='input__file-button'>Choose file</label>
                </span>}
                {editeMode
                    ? <ProfileDataReduxForm onSubmit={onSubmit} initialValues={profile} profile={profile}/>
                    : <ProfileData profile={profile} isOwner={isOwner} goToEditeMode={() => {
                        setEditeMode(true)
                    }}/>}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;


type ProfileDataPropsType = {
    profile: ProfileInfoType
    isOwner: boolean
    goToEditeMode: () => void
}
const ProfileData: React.FC<ProfileDataPropsType> = ({profile, isOwner, goToEditeMode}) => {
    return <div className={s.profileData}>
        {isOwner && <div>
            <button onClick={goToEditeMode}>Edit</button>
        </div>}
        <div>
            <b>Full name:</b> {profile.fullName}
        </div>
        <div>
            <b>Looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        {profile.lookingForAJob &&
            <div>
                <b>My professional skills:</b> {profile.lookingForAJobDescription}
            </div>
        }
        <div>
            <b>About me:</b> {profile.aboutMe}

        </div>
        <div>
            <b>Contacts:</b> {Object.keys(profile.contacts || {}).map(key => {
            return <Contact key={key}
                            contactTitle={key}
                            contactValue={profile.contacts[key as keyof ContactsType]}/>
        })}
        </div>
    </div>
}


type ContactPropsType = {
    contactTitle: string | null
    contactValue: string | null
}
const Contact: React.FC<ContactPropsType> = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}:</b> {contactValue}</div>
}