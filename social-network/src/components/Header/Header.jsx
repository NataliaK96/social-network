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
            <button className={style.logout} onClick={props.logout}>Logout</button>
          </div>
        )}
      </div>
      <div>
        <select name="lang" className={style.languages}>
          {languages.map((l) => (
            <option className={style.language} value={l} selected={l === 'ru'} onClick={() => {}}>
              {l}
            </option>
          ))}
        </select>
      </div>
    </header>
  );
};
