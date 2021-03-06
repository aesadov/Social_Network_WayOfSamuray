import {Dispatch} from 'redux';
import {profileAPI, usersAPI} from '../../api/api';

const ADD_POST = 'ADD-POST'
const SET_USERS_PROFILE = 'SET_USERS_PROFILE'
const SET_STATUS = 'SET_STATUS'

export type PostType = {
    id: number
    message: string
    likesCount: number
}
type ContactsType = {
    facebook: string,
    website: null,
    vk: string,
    twitter: string,
    instagram: string,
    youtube: null,
    github: string,
    mainLink: null
}
type PhotosType = {
    small: string,
    large: string,
}
export type ProfileInfoType = {
    aboutMe: string,
    contacts: ContactsType,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: PhotosType
}

export type ActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof setUsersProfile>
    | ReturnType<typeof setStatus>

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 15},
    ] as Array<PostType>,
    profile: null,
    status: ''
}

type InitialStateType = {
    posts: Array<PostType>,
    profile: null | ProfileInfoType,
    status: string
}

const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {

        case ADD_POST:
            let newPost: PostType = {
                id: new Date().getTime(),
                message: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        case SET_USERS_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}

export const addPostActionCreator = (newPostText: string) => ({type: ADD_POST, newPostText} as const)
export const setUsersProfile = (profile: ProfileInfoType) => ({type: SET_USERS_PROFILE, profile} as const)
export const setStatus = (status: string) => ({type: SET_STATUS, status} as const)
export const getUsersProfile = (userId: string) => (dispatch: Dispatch<ActionsTypes>) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUsersProfile(response.data))
    })
}
export const getStatus = (userId: string) => (dispatch: Dispatch<ActionsTypes>) => {
    profileAPI.getStatus(userId)
        .then(response => {
        dispatch(setStatus(response.data))
    })
}
export const updateStatus = (status: string) => (dispatch: Dispatch<ActionsTypes>) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}

export default profileReducer