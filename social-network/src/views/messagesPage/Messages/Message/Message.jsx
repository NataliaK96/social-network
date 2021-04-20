import React from 'react';
import style from './Message.module.scss';

export const Message = (props) => {
    return (
      <div className={style.message}>{props.message}</div>
    )
  }