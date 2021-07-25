import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionsTypes, RootStateType, StoreType} from '../redux/state';
type ProfilePropsType = {
    store: StoreType
    state: RootStateType
    dispatch: (action: ActionsTypes) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>

            <MyPosts
                newPostText={props.state.profilePage.newPostText}
                posts={props.state.profilePage.posts}
                dispatch={props.dispatch.bind(props.store)}
                />
        </div>
    )
}

export default Profile;