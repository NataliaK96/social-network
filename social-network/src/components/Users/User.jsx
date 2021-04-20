import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '../Button/Button';
import style from './Users.module.scss';

export const User = ({ user, followingInProgress, unfollow, follow }) => {
  const path = '/profile/' + user.id;
  return (
    <div>
      <NavLink className={style.user} to={path}>
        <div className={style.userName}>
          <img
            className={style.avatar}
            src={user.photos.small != null ? user.photos.small : '/user.png'}
            alt="avatar"
          />
          <span>{user.name}</span>
        </div>
        <div className={style.buttons}>
          {user.followed ? (
            <Button
              styleType="cancel"
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={(e) => {
                e.preventDefault();
                unfollow(user.id);
              }}
            >
              Unfriend
            </Button>
          ) : (
            <Button
              styleType="add"
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={(e) => {
                e.preventDefault();
                follow(user.id);
              }}
            >
              Add friend
            </Button>
          )}
        </div>
      </NavLink>
    </div>
  );
};
