import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/user-png.png';
import {UserType} from '../redux/users-reducer';

type UsersPropsType = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    onPageChanged: (pageNumber: number) => void
}

const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i)
    }

   return <div>
        <div>
            {pages.map( p => {
                return <span className={ props.currentPage === p ? styles.selectedPage : '' }
                             onClick={ () => {props.onPageChanged(p)} }
                             key={p}>{p}</span>
            })
            }
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.userPhoto}
                             alt={'userPhoto'}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users