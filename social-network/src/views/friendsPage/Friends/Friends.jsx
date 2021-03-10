import React from 'react';
import style from './Friends.module.scss';
import { NavLink } from 'react-router-dom';
import SearchInput from '../../../components/SearchInput/SearchInput';
import { ContentBox } from '../../../components/ContentBox/ContentBox';

const friendsData = [
  { id: 1, name: 'Sveta Volkova' },
  { id: 2, name: 'Olya Kolobok' },
  { id: 3, name: 'Vlad Dimuch' },
  { id: 4, name: 'Sergey Komarov' },
];

export const Friends = () => {
  const myFriends = friendsData.map((f) => {
    let path = '/profile/' + f.id;
    return (
      <NavLink className={style.user} to={path}>
        <div className={style.divElement}>
          <img className={style.avatar} src="/user.png" alt="avatar" />
          <p>{f.name}</p>
        </div>
      </NavLink>
    );
  });

  return (
    <ContentBox className={style.friends}>
      <SearchInput />
      {myFriends}
    </ContentBox>
  );
};
