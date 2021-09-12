import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionsTypes} from '../redux/store';
import {AppStateType} from '../redux/redux-store';
import MyPostsContainer from './MyPostsContainer';
type ProfilePropsType = {
    state: AppStateType
    dispatch: (action: ActionsTypes) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>

            <MyPostsContainer
                newPostText={props.state.profilePage.newPostText}
                posts={props.state.profilePage.posts}
                dispatch={props.dispatch}
                />
        </div>
    )
}

export default Profile;