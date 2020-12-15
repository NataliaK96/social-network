import React from 'react';
import styleFriends from './../Friends/Friends.module.scss';
import { NavLink } from 'react-router-dom';
import { Button } from './../Button/Button';
import style from './Users.module.scss';
import * as axios from 'axios';

export const Users = (props) => {
  if (props.users.length === 0) {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then((response) => {
        props.setUsers(response.data.items);
      });
  }

  const user = props.users.map((u) => {
    let path = '/friends/' + u.id;
    return (
      <NavLink className={styleFriends.friend} to={path}>
        <div className={styleFriends.userName}>
          <img
            className={styleFriends.avatar}
            src={u.photos.small != null ? u.photos.small : '/user.png'}
            alt="avatar"
          />
          <span>
            <p>{u.name}</p>
            <p className={style.location}>
              {'u.location.city'}, {'u.location.country'}
            </p>
          </span>
        </div>
        <div className={style.buttons}>
          {u.followed ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                props.unfollow(u.id);
              }}
            >
              Unfriend
            </button>
          ) : (
            <button
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                props.follow(u.id);
              }}
            >
              Add friend
            </button>
          )}
          <button>Write message</button>
          <Button type="default">DEFAULT</Button>
        </div>
      </NavLink>
    );
  });
  return <>{user}</>;
};
