import profileReducer, {addPostActionCreator, updateNewPostTextActionCreator} from './profile-reducer';
import dialogsReducer, {sendMessageCreator, updateNewMessageBodyCreator} from './dialogs-reducer';
type MessageType = {
    id: number
    message: string
}
type dialogsPageType = {
    messages: Array<MessageType>
    dialogs: DialogsType
    newMessageBody: string
}
type DialogType = {
    id: number
    name: string
}
type DialogsType = Array<DialogType>
type PostType = {
    id: number
    message: string
    likesCount: number
}
type PostsType = Array<PostType>
export type ProfilePageType = {
    posts: PostsType
    newPostText: string
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: dialogsPageType
}
export type IStoreType = {
    _state: RootStateType,
    _rerenderEntireTree: () => void,
    subscribe: (observer: () => void) => void,
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}
export type ActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof sendMessageCreator>
    | ReturnType<typeof updateNewMessageBodyCreator>

const store: IStoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 15},
            ],
            newPostText: 'it-kamasutra.com'

        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Victor'},
                {id: 6, name: 'Valera'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your IT-kamasutra'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'},
                {id: 6, message: 'Yo'},
            ],
            newMessageBody: '' // текст сообщения
        },
    },
    _rerenderEntireTree() { console.log('state changed') },

    subscribe(observer) { this._rerenderEntireTree = observer },

    getState() { return this._state },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._rerenderEntireTree()
    }
}

export default store;