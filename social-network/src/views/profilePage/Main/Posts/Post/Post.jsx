import React from 'react';
import { Button } from '../../../../../components/Button/Button';
import { ContentBox } from '../../../../../components/ContentBox/ContentBox';
import style from './Post.module.scss';

export const Post = (props) => {
  let defaultAvatar = '/user.png';
  let userAvatar = props.userAvatar;
  return (
    <ContentBox className={style.postElement}>
      <div className={style.post}>
        <div className={style.block}>
          <img
            className={style.avatar}
            src={userAvatar || defaultAvatar}
            alt="avatar"
          />
          <div>{props.message}</div>
        </div>
        <div className={style.block}>
          <img src="/like_default.png" alt="avatar" className={style.like} />
          <img src="/like.png" alt="avatar" className={style.like} />
          <Button styleType="delete">delete</Button>
        </div>
      </div>
    </ContentBox>
  );
};
