import React from 'react';
import { ContentBox } from '../../components/ContentBox/ContentBox';
import style from '../friendsPage/Friends/Friends.module.scss';
import SearchInputMusic from '../../components/SearchInput/SearchInputMusic';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import styleMusic from './Music.module.scss';

export const Music = (props) => {
  const myMusic =
    props.musicPage && props.musicPage.musicData
      ? props.musicPage.musicData.map((s) => {
          return (
            <div className={style.divElement + ' ' + styleMusic.elementMusic}>
              <AudioPlayer
              autoPlay={false}
              autoPlayAfterSrcChange={false}
                className={styleMusic.audioPlayer}
                src={s.source}
                header={s.name}
              />
            </div>
          );
        })
      : null;

  return (
    <ContentBox className={style.friends}>
      <SearchInputMusic setMusic={props.setMusic} />
      {myMusic}
    </ContentBox>
  );
};
