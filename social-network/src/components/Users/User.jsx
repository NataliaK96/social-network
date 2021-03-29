import React from 'react';
import styleFriends from '../../views/friendsPage/Friends/Friends.module.scss';
import { NavLink } from 'react-router-dom';
import { Button } from '../Button/Button';
import style from './Users.module.scss';

export const User = ({ user, followingInProgress, unfollow, follow }) => {
  const path = '/profile/' + user.id;
  return (
    <div>
      <NavLink className={styleFriends.user} to={path}>
        <div className={styleFriends.userName}>
          <img
            className={styleFriends.avatar}
            src={user.photos.small != null ? user.photos.small : '/user.png'}
            alt="avatar"
          />
          <span>
            <p>{user.name}</p>
            <p className={style.location}>
              {'user.location.city'}, {'user.location.country'}
            </p>
          </span>
        </div>
        <div className={style.buttons}>
          {user.followed ? (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={(e) => {
                e.preventDefault();
                unfollow(user.id);
              }}
            >
              Unfriend
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={(e) => {
                e.preventDefault();
                follow(user.id);
              }}
            >
              Add friend
            </button>
          )}
          <button>Write message</button>
          <Button styleType="delete">delete</Button>
          <Button styleType="upload">upload</Button>
          <Button styleType="save">save</Button>
          <Button styleType="send">send</Button>
          <Button styleType="default">default</Button>
        </div>
      </NavLink>
    </div>
  );
};
