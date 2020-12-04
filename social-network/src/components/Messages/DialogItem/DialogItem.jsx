import React from 'react';
import style from './DialogItem.module.scss';
import { NavLink } from 'react-router-dom';

export const DialogItem = (props) => {
  let path = '/messages/' + props.id;

  return (
    <NavLink
      className={[style.dialog, style.name, style.active].join(' ')}
      to={path}
    >
      <img className={style.avatar} src="/user.png" alt="avatar" />
      <p>{props.name}</p>
    </NavLink>
  );
};
