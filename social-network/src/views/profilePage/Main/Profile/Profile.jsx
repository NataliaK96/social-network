import React from 'react';
import style from './Profile.module.scss';
import { PostsContainer } from '../Posts/PostsContainer';
import { ProfileInfo } from '../ProfileInfo/ProfileInfo';

export const Profile = (props) => {
  return (
    <div className={style.profile}>
      <ProfileInfo profile={props.profile}/>
      <PostsContainer store={props.store} />
    </div>
  );
};
