import {Dispatch} from 'redux';
import {authAPI} from '../../api/api';
import {AppThunk} from './redux-store';
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = 'SET_USER_DATA'

export type AuthActionsTypes = ReturnType<typeof setAuthUserData> | ReturnType<typeof stopSubmit>
export type getAuthUserDataType = ReturnType<typeof getAuthUserData>

export type InitialStateType = {
    id: string | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
}

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

const authReducer = (state: InitialStateType = initialState, action: AuthActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

export const setAuthUserData = (id: string | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth}
} as const)

export const getAuthUserData = () => (dispatch: Dispatch<AuthActionsTypes>) => {
    return authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
}

export const login = (email: string, password: string, rememberMe: boolean = false): AppThunk => dispatch => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
                dispatch(stopSubmit('Login', {_error: message}))
            }
        })
}
export const logout = () => (dispatch: Dispatch<AuthActionsTypes>) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}
export default authReducer