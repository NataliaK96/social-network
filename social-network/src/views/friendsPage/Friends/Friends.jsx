import React from 'react';
import style from './Friends.module.scss';
import { NavLink } from 'react-router-dom';
import { ContentBox } from '../../../components/ContentBox/ContentBox';
import SearchFriends from '../../../components/SearchInput/SearchFriends';
import { Button } from '../../../components/Button/Button';

export const friendsData = [
  { id: 2},
];

export const Friends = (props) => {
  const myFriends = friendsData.map((f) => {
    let path = '/profile/' + f.id;
    return (
      <NavLink className={style.user} to={path}>
        <div className={style.divElement}>
          <img className={style.avatar} src="/user.png" alt="avatar" />
          <p>{f.name}</p>
        </div>
        <Button styleType="delete">delete</Button>
      </NavLink>
    );
  });

  return (
    <ContentBox className={style.friends}>
      <div className={style.name}>
        <h4>My friends</h4>
      <SearchFriends/>
      </div>
      {myFriends}
    </ContentBox>
  );
};
