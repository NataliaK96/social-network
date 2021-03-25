import React from 'react';
import style from './Profile.module.scss';
import { PostsContainer } from '../Posts/PostsContainer';
import { ProfileInfo } from '../ProfileInfo/ProfileInfo';

export const Profile = (props) => {
  return (
    <div className={style.profile}>
      <ProfileInfo
        isOwner={props.isOwner}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        savePhoto = {props.savePhoto}
        theme = {props.theme}
        setTheme = {props.setTheme}
        updateProfile={props.updateProfile}
      />
      <PostsContainer />
    </div>
  );
};
