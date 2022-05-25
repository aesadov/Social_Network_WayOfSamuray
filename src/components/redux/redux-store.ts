import {applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import usersReducer from './users-reducer';
import authReducer, {AuthActionsTypes} from './auth-reducer';
import thunkMiddleware, {ThunkAction} from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import appReducer from './app-reducer';


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
})

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))


export type AppStateType = ReturnType<typeof rootReducer>

type AppActionsType = AuthActionsTypes

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionsType>

export default store

