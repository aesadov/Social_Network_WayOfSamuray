import {Dispatch} from 'redux';
import {authAPI, securityAPI} from '../../api/api';
import {AppThunk} from './redux-store';
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'samurai-network/auth/GET_CAPTCHA_URL_SUCCESS'

export type AuthActionsTypes = ReturnType<typeof setAuthUserData> | ReturnType<typeof stopSubmit>
export type getAuthUserDataType = ReturnType<typeof getAuthUserData>

export type InitialStateType = {
    id: string | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    captchaUrl: string | null
}

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null // if null then captcha is not required
}

const authReducer = (state: InitialStateType = initialState, action: AuthActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
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
export const getCaptchaUrlSuccess = (captchaUrl: string) => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl}
} as const)

export const getAuthUserData = () => async (dispatch: Dispatch<AuthActionsTypes>) => {
    let response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean = false, captcha: string | null): AppThunk => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
        dispatch(stopSubmit('Login', {_error: message}))
    }
}

export const getCaptchaUrl = (): AppThunk => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))

}

export const logout = () => async (dispatch: Dispatch<AuthActionsTypes>) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}
export default authReducer