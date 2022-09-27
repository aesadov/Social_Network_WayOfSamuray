import React from 'react';
import {UserType} from '../redux/users-reducer';
import Paginator from '../common/paginator/Paginator';
import User from './User';

type UsersPropsType = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    onPageChanged: (pageNumber: number) => void,
    followingInProgress: Array<number>,
}

const Users = ({
                   currentPage,
                   onPageChanged,
                   totalUsersCount,
                   pageSize,
                   users,
                   followingInProgress,
                   follow,
                   unfollow
               }: UsersPropsType) => {

    return <div>

        <Paginator currentPage={currentPage}
                   onPageChanged={onPageChanged}
                   totalItemsCount={totalUsersCount}
                   pageSize={pageSize}
                   portionSize={10}/>
        <div>
            {users.map(u => <User user={u}
                                  followingInProgress={followingInProgress}
                                  follow={follow}
                                  unfollow={unfollow}
                                  key={u.id}/>
            )}
        </div>

    </div>
}

export default Users