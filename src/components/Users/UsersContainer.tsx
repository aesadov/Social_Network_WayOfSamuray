import {connect} from 'react-redux';
import {AppStateType} from '../redux/redux-store';
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from '../redux/users-reducer';
import {Dispatch} from 'redux';
import React from 'react';
import axios from 'axios';
import Users from './Users';

type UsersPropsType = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setUsers: (users: Array<UserType>) => void,
    setCurrentPage: (pageNumber: number) => void,
    setTotalUsersCount: (totalCount: number) => void,
}

type MapStateToPropsType = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
}

type MapDispatchToPropsType = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setUsers: (users: Array<UserType>) => void,
    setCurrentPage: (pageNumber: number) => void,
    setTotalUsersCount: (totalCount: number) => void
}

class UsersContainer extends React.Component <UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(responce => {
            this.props.setUsers(responce.data.items)
            this.props.setTotalUsersCount(responce.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(responce => {
            this.props.setUsers(responce.data.items)
        })
    }

    render() {

        return <Users
            totalUsersCount={this.props.totalUsersCount} //
            pageSize={this.props.pageSize}  //
            currentPage={this.props.currentPage} //
            onPageChanged={this.onPageChanged}
            users={this.props.users} //
            unfollow={this.props.unfollow} //
            follow={this.props.follow}  //
        />
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

