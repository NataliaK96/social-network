import React from 'react';
import style from './../Friends/Friends.module.scss';
import { NavLink } from 'react-router-dom';

export const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        avatar: '/user.png',
        followed: false,
        name: 'Vova Volkova',
        location: { city: 'Minsk', country: 'Belarus' },
      },
      {
        id: 2,
        avatar: '/user.png',
        followed: true,
        name: 'Olya Kolobok',
        location: { city: 'Sorochinsk', country: 'Russia' },
      },
      {
        id: 3,
        avatar: '/user.png',
        followed: false,
        name: 'Kolya Vovvv',
        location: { city: 'Samara', country: 'Russia' },
      },
      {
        id: 4,
        avatar: '/user.png',
        followed: true,
        name: 'Sergey Komarov',
        location: { city: 'Minsk', country: 'Belarus' },
      },
    ]);
  }

  const user = props.users.map((u) => {
    let path = '/friends/' + u.id;
    return (
      <NavLink className={style.friend} to={path}>
        <img className={style.avatar} src={u.avatar} alt="avatar" />
        <span>
          <p>{u.name}</p>
          <p>
            {u.location.city}, {u.location.country}
          </p>
        </span>
        <span>
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
        </span>
      </NavLink>
    );
  });
  return <>{user}</>;
};
