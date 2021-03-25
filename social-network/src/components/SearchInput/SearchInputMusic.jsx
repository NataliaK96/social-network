import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import style from './SearchInput.module.scss';
import { sound } from '../../views/musicPage/Sound';

const SearchInputMusic = (props) => {
  const [name, setName] = useState('')
  const find = (s) => {
    let str = s.toLowerCase();
    const filteredArr = sound.filter(
      (obj) => obj.name.toLowerCase().search(str) !== -1
    );
    const sortArr = filteredArr.sort((a, b) => {
      return (
        a.name.toLowerCase().search(str) - b.name.toLowerCase().search(str)
      );
    });
    return sortArr;
  };
  return (
    <Paper component="form" className={style.root}>
      <InputBase
        className={style.input}
        placeholder="Search music"
        inputProps={{ 'aria-label': 'search music' }}
        onChange={(e)=>{
          const name = e.currentTarget.value
          name && setName(name)
        }}
      />
      <div className={style.iconButton} onClick={(e)=>{
        e.preventDefault()
        const newMusicList = find(name);
        props.setMusic(newMusicList)
      }}>
        <IconButton type="submit" aria-label="search">
          <img
            className={style.magnifier}
            src="/magnifier.png"
            alt="magnifier"
          />
        </IconButton>
      </div>
    </Paper>
  );
};
export default SearchInputMusic;
