import React from 'react';
import {ProfileInfoType} from '../../redux/profile-reducer';
import {createField, Input, Textarea} from '../../common/Forms controls/FormsControls';
import {InjectedFormProps, reduxForm} from 'redux-form';
import s from './ProfileInfo.module.css';
import style from '../../common/Forms controls/FormsControls.module.css';


export type ProfileDataFormType = {
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    aboutMe: string
}

type ProfileDataFormOwnProps = {
    profile: null | ProfileInfoType
}

const ProfileDataForm: React.FC<InjectedFormProps<ProfileDataFormType, ProfileDataFormOwnProps> & ProfileDataFormOwnProps> = ({handleSubmit, profile , error}) => {

    return <form onSubmit={handleSubmit}>
        <div>
            <button>save</button>
        </div>
        {error && <div className={style.formSummaryError}>{error}</div>}
        <div>
            <b>Full name:</b> {createField('Full name:', 'fullName', [], Input)}
        </div>
        <div>
            <b>Looking for a job:</b> {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
        </div>
        <div>
            <b>My professional skills:</b> {createField('My professional skills:', 'lookingForAJobDescription', [], Textarea)}
        </div>
        <div>
            <b>About me:</b> {createField('About me:', 'aboutMe', [], Textarea)}
        </div>
        <div>
            <b>Contacts:</b> {Object.keys(profile?.contacts || {}).map(key => {
            return <div key={key} className={s.contact}>
                <b>{key}: {createField(key, 'contacts.' + key, [], Input)}</b>
            </div>
        })}
        </div>
    </form>
}

const ProfileDataReduxForm = reduxForm<ProfileDataFormType, ProfileDataFormOwnProps>({form: 'edite-profile'})(ProfileDataForm)

export default ProfileDataReduxForm