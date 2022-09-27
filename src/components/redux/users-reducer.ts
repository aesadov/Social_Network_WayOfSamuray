import {usersAPI} from '../../api/api';
import {Dispatch} from 'redux';
import {AppThunk} from './redux-store';
import {updateObjectInArray} from '../../utils/object-helpers';

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

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
export type getUsersType = ReturnType<typeof requestUsers>

export type ActionsTypes =
    ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 19,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>
}

export type InitialStateType = typeof initialState

const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export const followSuccess = (userId: number) => ({type: FOLLOW, userId} as const)
export const unfollowSuccess = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsers = (users: Array<UserType>) => ({type: SET_USERS, users} as const)
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => (
    {type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId} as const
)
export const requestUsers = (page: number, pageSize: number): AppThunk => async dispatch => {
    dispatch(toggleIsFetching(true))
    // dispatch(setCurrentPage(page)) - так фиксил Димыч (81 урок). Я зафиксил ранее по другому. Уже не помню как (работает и без этой строчки)
    const data = await usersAPI.getUsers(page, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
}

const followUnfollowFlow = async (dispatch: Dispatch<ActionsTypes>, userId: number, apiMethod: any, actionCreator: typeof followSuccess | typeof unfollowSuccess) => {
    dispatch(toggleFollowingProgress(true, userId))
    const response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
} // followUnfollowFlow был создан для избавления от дублирования в санккриейтерах follow & unfollow

export const follow = (userId: number) => async (dispatch: Dispatch<ActionsTypes>) => {
    followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(userId), followSuccess)
}

export const unfollow = (userId: number) => async (dispatch: Dispatch<ActionsTypes>) => {
    followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(userId), unfollowSuccess)
}

export default usersReducer