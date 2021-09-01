import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionsTypes, RootStateType, IStoreType} from '../redux/store';
import {AppStateType, StoreType} from '../redux/redux-store';
type ProfilePropsType = {
    state: AppStateType
    dispatch: (action: ActionsTypes) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>

            <MyPosts
                newPostText={props.state.profilePage.newPostText}
                posts={props.state.profilePage.posts}
                dispatch={props.dispatch}
                />
        </div>
    )
}

export default Profile;