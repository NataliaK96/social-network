import React from 'react';
import style from './SearchInput.module.scss';
import { NavLink } from 'react-router-dom';
import { Button } from '../Button/Button';

const SearchFriends = () => {
  let path = '/friends/find';
  return (
    <div className={style.iconButton}>
      <NavLink to={path}>
        <Button styleType="default">
          Search friends
        </Button>
      </NavLink>
    </div>
  );
};
export default SearchFriends;

