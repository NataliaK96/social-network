import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import style from './SearchInput.module.scss';
import { NavLink } from 'react-router-dom';

const SearchInput = () => {
  let path = '/friends/find';
  return (
    <Paper component="form" className={style.root}>
      <InputBase
        className={style.input}
        placeholder="Search friends"
        inputProps={{ 'aria-label': 'search friends' }}
      />
      <div className={style.iconButton}>
        <NavLink to={path}>
          <IconButton type="submit" aria-label="search">
            <img
              className={style.magnifier}
              src="/magnifier.png"
              alt="magnifier"
            />
          </IconButton>
        </NavLink>
      </div>
    </Paper>
  );
};
export default SearchInput;
