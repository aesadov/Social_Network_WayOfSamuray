export type MessageType = {
    id: number
    message: string
}
export type dialogsPageType = {
    messages: Array<MessageType>
    dialogs: DialogsType
    newMessageBody: string
}
export type DialogType = {
    id: number
    name: string
}
export type DialogsType = Array<DialogType>
export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type PostsType = Array<PostType>
export type ProfilePageType = {
    posts: PostsType
    newPostText: string
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: dialogsPageType
}
export type StoreType = {
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

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'


const store: StoreType = {
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
        }
    },
    _rerenderEntireTree() {
        console.log('state changed')
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer
    },
    getState() {
        return this._state
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost: PostType = {
                id: new Date().getTime(),
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._rerenderEntireTree()
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._rerenderEntireTree()
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.newBody
            this._rerenderEntireTree()
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.newMessageBody = ''
            this._state.dialogsPage.messages.push({id: 7, message: body})
            this._rerenderEntireTree()
        }
    }
}

export const addPostActionCreator = () => ( {type: ADD_POST} as const)
export const updateNewPostTextActionCreator = (newText: string) => ({
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const
)

export const sendMessageCreator = () => ( {type: SEND_MESSAGE} as const)
export const updateNewMessageBodyCreator = (body: string) => ({
        type: UPDATE_NEW_MESSAGE_BODY,
        newBody: body
    } as const
)

export default store;