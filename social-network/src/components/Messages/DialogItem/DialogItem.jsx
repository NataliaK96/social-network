import React from 'react';
import style from './DialogItem.module.scss';
import {NavLink} from 'react-router-dom'

export const DialogItem= (props) =>{

  let path = '/messages/' + props.id

  return (
    <div className={style.dialog}>
        <img className={style.avatar} src="/user.png" alt="avatar"/>
            <NavLink className={[style.name, style.active].join(' ')} to={path}>
            {props.name}
            </NavLink>
            </div>
  )
}
