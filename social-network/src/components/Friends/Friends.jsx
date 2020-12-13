import React from 'react';
import style from './Friends.module.scss';
import { NavLink } from 'react-router-dom';
import SearchInput from './../SearchInput/SearchInput'

const friendsData = [
  { id: 1, name: 'Sveta Volkova' },
  { id: 2, name: 'Olya Kolobok' },
  { id: 3, name: 'Vlad Dimuch' },
  { id: 4, name: 'Sergey Komarov' },
];

export const Friends = () => {
  const myFriends = friendsData.map((f) => {
    let path = '/friends/' + f.id;
    return (
      <NavLink className={style.friend} to={path}>
        <img className={style.avatar} src="/user.png" alt="avatar" />
        <p>{f.name}</p>
      </NavLink>
    );
  });

  return <div className={style.friends}>
      <SearchInput/>
      {myFriends}
      </div>;
};
