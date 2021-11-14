import MyPosts from './MyPosts/MyPosts';
import {addPostActionCreator, PostType, updateNewPostTextActionCreator} from '../redux/profile-reducer';
import {connect} from 'react-redux';
import {AppStateType} from '../redux/redux-store';
import {Dispatch} from 'redux';

type MapStateToPropsType = {
    posts: Array<PostType>,
    newPostText: string
}

type MapDispatchToPropsType = {
    updateNewPostText: (text: string) => void,
    addPost: () => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;