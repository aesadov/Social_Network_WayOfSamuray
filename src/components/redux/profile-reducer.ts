import {ActionsTypes, PostType, ProfilePageType} from './state';

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {
    switch(action.type) {
        case ADD_POST:
            let newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default: return state
    }
}

export const addPostActionCreator = () => ( {type: ADD_POST} as const)
export const updateNewPostTextActionCreator = (newText: string) => ({
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const
)

export default profileReducer

