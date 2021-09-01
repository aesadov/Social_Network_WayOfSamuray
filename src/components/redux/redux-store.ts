import {combineReducers, createStore} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';

export type StoreType = typeof store
export type AppStateType = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

let store = createStore(reducers)

export default store