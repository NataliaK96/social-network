import React from 'react';
import { ContentBox } from '../../components/ContentBox/ContentBox';
import style from '../friendsPage/Friends/Friends.module.scss';
import SearchInput from '../../components/SearchInput/SearchInput';
import { sound } from './Sound';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import styleMusic from './Music.module.scss'

export const Music = () => {
  const myMusic = sound.map((s) => {
    return (
      <div className={style.divElement + ' ' + styleMusic.elementMusic}>
        <AudioPlayer className={styleMusic.audioPlayer}
          src={s.source}
          onPlay={(e) => console.log('onPlay')}
          header={s.name}
        />
      </div>
    );
  });

  return (
    <ContentBox className={style.friends}>
      <SearchInput />
      {myMusic}
    </ContentBox>
  );
};
