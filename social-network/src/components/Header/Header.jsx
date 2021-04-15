import React from 'react';
import style from './Header.module.scss';
import DehazeIcon from '@material-ui/icons/Dehaze';
import CloseIcon from '@material-ui/icons/Close';

let languages = ['en', 'ru', 'be'];

export const Header = (props) => {
  return (
    <header className={style.header}>
      <div className={style.headerItem}>
        <div className={style.hBlock}>
          <div
            onClick={() => props.onShowMenu(!props.isOpenedMenu)}
            className={style.icon}
          >
            {props.isOpenedMenu ? (
              <CloseIcon className={style.imgIcon} />
            ) : (
              <DehazeIcon className={style.imgIcon} />
            )}
          </div>
          <div className={style.h1}>Social Network</div>
        </div>
        <div className={style.loginBlock}>
          {props.isAuth && (
            <div>
              <button className={style.logout} onClick={props.logout}>
                Logout
              </button>
            </div>
          )}
          <select name="lang" className={style.languages}>
            {languages.map((l) => (
              <option
                className={style.language}
                value={l}
                selected={l === 'ru'}
                onClick={() => {}}
              >
                {l}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
};
