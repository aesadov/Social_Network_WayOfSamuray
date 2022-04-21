import MyPosts from './MyPosts/MyPosts';
import {addPostActionCreator, PostType} from '../redux/profile-reducer';
import {connect} from 'react-redux';
import {AppStateType} from '../redux/redux-store';
import {Dispatch} from 'redux';

type MapStateToPropsType = {
    posts: Array<PostType>,
}

type MapDispatchToPropsType = {
    addPost: (newPostText: string) => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostActionCreator(newPostText))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;