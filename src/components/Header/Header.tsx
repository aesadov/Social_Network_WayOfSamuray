import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
import {HeaderContainerPropsType} from './HeaderContainer';

type HeaderPropsType = HeaderContainerPropsType

const Header = (props: HeaderPropsType) => {
    return <header className={s.header}>
        <span className={s.span}>Social Network</span>
        <div className={s.loginBlock}>
            { props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
            : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;