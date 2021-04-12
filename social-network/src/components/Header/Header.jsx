import React from 'react';
import style from './Header.module.scss';

let languages = ['en', 'ru', 'be'];

export const Header = (props) => {
  return (
    <header className={style.header}>
      <h1 className={style.h1}>Social Network</h1>
      <div className={style.loginBlock}>
        {props.isAuth && (
          <div>
            <button onClick={props.logout}>Logout</button>
          </div>
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
