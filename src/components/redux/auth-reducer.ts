import {Dispatch} from 'redux';
import {authAPI} from '../../api/api';

const SET_USER_DATA = 'SET_USER_DATA'

export type ActionsTypes = ReturnType<typeof setAuthUserData>
export type getAuthUserDataType = ReturnType<typeof getAuthUserData>

export type InitialStateType = {
    id: number | null,
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

const authReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch(action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        default:
            return state
    }
}

export const setAuthUserData = (id: number, email: string, login: string) => ( {
    type: SET_USER_DATA,
    data: {id, email, login,}
} as const)

export const getAuthUserData = () => (dispatch: Dispatch<ActionsTypes>) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                dispatch(setAuthUserData(id, email, login,))
            }
        })
}

export default authReducer

