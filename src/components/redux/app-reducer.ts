import {AppThunk} from './redux-store';
import {getAuthUserData} from './auth-reducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

export type AppActionsTypes = ReturnType<typeof initializedSuccess>

export type InitialStateType = {
    initialized: boolean,
}

let initialState = {
    initialized: false,
}

const appReducer = (state: InitialStateType = initialState, action: AppActionsTypes): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state
    }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS} as const)

export const initializeApp = (): AppThunk => dispatch => {
    let promise = dispatch(getAuthUserData())
    promise.then(()=>{
        dispatch(initializedSuccess())
    })
}


export default appReducer