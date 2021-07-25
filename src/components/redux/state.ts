export type MessageType = {
    id: number
    message: string
}
export type dialogsPageType = {
    messages: Array<MessageType>
    dialogs: DialogsType
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
type AddPostActionType = {
    type: 'ADD-POST'
}
type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: string
}

export type ActionsTypes = AddPostActionType | UpdateNewPostTextActionType

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
            ]
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
        if (action.type === 'ADD-POST') {
    let newPost: PostType = {
        id: new Date().getTime(),
        message: this._state.profilePage.newPostText,
        likesCount: 0
    }
    this._state.profilePage.posts.push(newPost)
    this._state.profilePage.newPostText = ''
    this._rerenderEntireTree()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
    this._state.profilePage.newPostText = action.newText
    this._rerenderEntireTree()
        }
    }

}

export default store;