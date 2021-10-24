import {ActionsTypes} from './store';

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export type PostType = {
    id: number
    message: string
    likesCount: number
}

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 15},
    ] as Array<PostType>,
    newPostText: 'it-kamasutra.com'
}

type InitialStateType = typeof initialState

const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
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

