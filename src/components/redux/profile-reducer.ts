import {profileAPI, usersAPI} from '../../api/api';
import {ProfileDataFormType} from '../Profile/ProfileInfo/ProfileDataForm';
import {AppThunk} from './redux-store';
import {stopSubmit} from 'redux-form';

const ADD_POST = 'ADD-POST'
const SET_USERS_PROFILE = 'SET_USERS_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'
const SAFE_PHOTO_SUCCESS = 'SAFE_PHOTO_SUCCESS'

export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ContactsType = {
    facebook: string | null,
    website: string | null,
    vk: string | null,
    twitter: string |null,
    instagram: string |null,
    youtube: string | null,
    github: string |null,
    mainLink: string | null
}
type PhotosType = {
    small: string,
    large: string,
}
export type ProfileInfoType = {
    aboutMe: string | undefined,
    contacts: ContactsType,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: PhotosType
}

export type ActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof deletePost>
    | ReturnType<typeof savePhotoSuccess>

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 15},
    ] as Array<PostType>,
    profile: {} as ProfileInfoType,
    status: ''
}

type InitialStateType = {
    posts: Array<PostType>,
    profile: ProfileInfoType,
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
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        case SAFE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }

        default:
            return state
    }
}

export const addPostActionCreator = (newPostText: string) => ({type: ADD_POST, newPostText} as const)
export const setUserProfile = (profile: ProfileInfoType) => ({type: SET_USERS_PROFILE, profile} as const)
export const setStatus = (status: string) => ({type: SET_STATUS, status} as const)
export const deletePost = (postId: number) => ({type: DELETE_POST, postId} as const)
export const savePhotoSuccess = (photos: PhotosType) => ({type: SAFE_PHOTO_SUCCESS, photos} as const)



export const getUserProfile = (userId: string | null): AppThunk => async (dispatch) => {
    const response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}
export const getStatus = (userId: string): AppThunk => async (dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}
export const updateStatus = (status: string): AppThunk => async (dispatch) => {
    try {
        const response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    } catch (error) {}
}
export const savePhoto = (file: File): AppThunk => async (dispatch) => {
    const response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}
export const safeProfile = (profile: ProfileDataFormType): AppThunk => async (dispatch, getState) => {
    const userId = getState().auth.id
    const response = await profileAPI.safeProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    } else {
        dispatch(stopSubmit('edite-profile', {_error: response.data.messages[0]}))
        return Promise.reject(response.data.messages[0])
    }
}

export default profileReducer