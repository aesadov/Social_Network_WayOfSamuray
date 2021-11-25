const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'

type LocationType = {
    city: string
    country: string
}

type PhotosType = {
    small: string
    large: string
}

export type UserType = {
    id: number
    photos: PhotosType //photoUrl
    followed: boolean
    name: string  //fullName
    status: string
    location: LocationType
}

export type ActionsTypes = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC> | ReturnType<typeof setCurrentPageAC> | ReturnType<typeof setTotalUsersCountAC>

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 19,
    currentPage: 2,
}

type InitialStateType = typeof initialState

const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch(action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map( u => {
                    if ( u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return  u
                })
            }
        case 'SET_USERS':
            return {
                ...state,
                users: action.users
            }
        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.currentPage
            }
        case 'SET_TOTAL_USERS_COUNT':
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        default:
            return state
    }
}

export const followAC = (userId: number) => ( {type: FOLLOW, userId} as const)
export const unfollowAC = (userId: number) => ( {type: UNFOLLOW, userId} as const)
export const setUsersAC = (users: Array<UserType>) => ( {type: SET_USERS, users} as const)
export const setCurrentPageAC = (currentPage: number) => ( {type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCountAC = (totalUsersCount: number) => ( {type: SET_TOTAL_USERS_COUNT, totalUsersCount} as const)

export default usersReducer

