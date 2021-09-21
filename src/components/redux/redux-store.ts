import {combineReducers, createStore} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

let store = createStore(reducers)
export type StoreType = typeof store
export type AppStateType = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch

export default store