import React from 'react';
import style from './Profile.module.scss';
import { Posts } from '../Posts/Posts';
import { ProfileInfo } from './../ProfileInfo/ProfileInfo';

export const Profile = (props) => {
  return (
    <div className={style.profile}>
      <ProfileInfo />
      <Posts postData={props.state.postsData} />
    </div>
  );
};
