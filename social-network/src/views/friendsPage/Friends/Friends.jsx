import React, { useEffect } from 'react';
import style from './Friends.module.scss';
import { NavLink } from 'react-router-dom';
import { ContentBox } from '../../../components/ContentBox/ContentBox';
import SearchFriends from '../../../components/SearchInput/SearchFriends';
import { Button } from '../../../components/Button/Button';

export const Friends = ({ friendsPage, getFriends, deleteFriend }) => {
  useEffect(() => {
    getFriends();
  }, [getFriends]);

  const myFriends =
    friendsPage &&
    friendsPage.friendsData.map((f) => {
      let path = '/profile/' + f.userId;
      return (
        <NavLink className={style.user} to={path}>
          <div className={style.divElement}>
            <img className={style.avatar} src={f.photos.small} alt="avatar" />
            <p>{f.fullName}</p>
          </div>
          <Button
            styleType="delete"
            onClick={(e) => {
              e.preventDefault();
              
              deleteFriend(f.userId);
            }}
          >
            delete
          </Button>
        </NavLink>
      );
    });

  return (
    <ContentBox className={style.friends}>
      <div className={style.name}>
        <h4 className={style.p}>My friends</h4>
        <SearchFriends />
      </div>
      {myFriends}
    </ContentBox>
  );
};
