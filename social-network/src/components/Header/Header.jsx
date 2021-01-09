import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.scss';

export const Header = (props) => {
  return (
    <header className={style.header}>
      <img className={style.icon} src="/icon.png" alt="icon" />
      <h1 className={style.h1}>Social Network</h1>
      <div className={style.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
};
