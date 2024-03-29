import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/user-png.png';
import {UserType} from '../redux/users-reducer';
import {NavLink} from 'react-router-dom';

type UserPropsType = {
    user: UserType,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    followingInProgress: Array<number>,
}

const User = ({
                  user,
                  followingInProgress,
                  follow,
                  unfollow
              }: UserPropsType) => {

    return <div className={styles.user}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small !== null ? user.photos.small
                                : userPhoto} className={styles.userPhoto} alt={'userPhoto'}/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          unfollow(user.id)
                                      }}>Unfollow</button>
                            : <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          follow(user.id)
                                      }}>Follow</button>}
                    </div>
                </span>
        <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{'user.location.country'}</div>
                        <div>{'user.location.city'}</div>
                    </span>
        </span>
    </div>
}

export default User