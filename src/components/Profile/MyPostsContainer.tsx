import React from 'react';
import {ActionsTypes, PostsType} from '../redux/store';
import MyPosts from './MyPosts/MyPosts';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../redux/profile-reducer';

type MyPostsPropsType = {
    dispatch: (action: ActionsTypes) => void
    posts: PostsType
    newPostText: string
}

const MyPostsContainer = (props: MyPostsPropsType) => {

    let addPost = () => {
        props.dispatch( addPostActionCreator() )
    }

    let onPostChange = (text: string) => {
            props.dispatch( updateNewPostTextActionCreator(text) )
    }

    return <MyPosts updateNewPostText={onPostChange}
                    posts={props.posts}
                    newPostText={props.newPostText}
                    addPost={addPost}/>
}

export default MyPostsContainer;