import React from 'react';
import style from './Post.module.scss';

export const Post = (props) => {
  //let userAvatarSmall = props.profile.photos.small;
  //let defaultAvatar = '/user.png';
  return (
    <div className={style.post}>
      {/* <img
            className={style.avatar}
            src={ defaultAvatar}
            alt="avatar"
          /> */}
      <div>{props.message}</div>
      <span>Like {props.likeCount}</span>
    </div>
  );
};
