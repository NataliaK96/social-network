import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.scss';

let languages = ['en', 'ru', 'be'];

export const Header = (props) => {
  return (
    <header className={style.header}>
      <img className={style.logo} src="/logo.png" alt="logo" />
      <h1 className={style.h1}>Social Network</h1>
      <div className={style.loginBlock}>
        {props.isAuth ? (
          <div>
            {props.login}
            <button onClick={props.logout}>Logout</button>
          </div>
        ) : (
          <NavLink to={'/login'}>Login</NavLink>
        )}
      </div>
      <div className={style.language}>
        <select name="lang">
          {languages.map((l) => (
            <option value={l} selected={l === 'ru'} onClick={() => {}}>
              {l}
            </option>
          ))}
        </select>
      </div>
    </header>
  );
};
