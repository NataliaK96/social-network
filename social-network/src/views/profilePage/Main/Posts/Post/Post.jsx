import React from 'react';
import style from './Post.module.scss';

export const Post = (props) => {
  return (
    <div className={style.post}>
      <div>{props.message}</div>
      <span>Like {props.likeCount}</span>
    </div>
  );
};
