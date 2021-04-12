import React, { useState } from 'react';
import { Button } from '../../../../../components/Button/Button';
import { ContentBox } from '../../../../../components/ContentBox/ContentBox';
import style from './Post.module.scss';

export const Post = (props) => {
  const [isLike, setLike] = useState(false);
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
          {isLike ? (
            <img
              src="/like.png"
              alt="avatar"
              className={style.like}
              onClick={() => setLike(false)}
            />
          ) : (
            <img
              src="/like_default.png"
              alt="avatar"
              className={style.like}
              onClick={() => setLike(true)}
            />
          )}
          <Button styleType="delete" onClick={()=>props.delete(props.id)}>delete</Button>
        </div>
      </div>
    </ContentBox>
  );
};
