import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../redux/profile-reducer';
import StoreContext from '../redux/StoreContext';


const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState()

                let addPost = () => {
                    store.dispatch(addPostActionCreator())
                }

                let onPostChange = (text: string) => {
                    store.dispatch(updateNewPostTextActionCreator(text))
                }

                return <MyPosts updateNewPostText={onPostChange}
                                posts={state.profilePage.posts}
                                newPostText={state.profilePage.newPostText}
                                addPost={addPost}/>
            }
            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;