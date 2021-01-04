import React from 'react';
import style from './ProfileInfo.module.scss';
import image from '../../../../images/coconuts.jpg';
import { Preloader } from '../../../../components/Preloader/Preloader';
//"/user.png"
export const ProfileInfo = (props) => {
  if (!props.profile){
    return <Preloader/>
  }

  return (
    <div className={style.profile}>
      <div className={style.theme}>
        <img onClick={ () => alert('hello!') }
          className={[style.edit, style.theme].join(' ')}
          src="/edit.png"
          alt="edit"
        />
        <img className={style.img} src={image} alt="flowers" />
      </div>
      <div className={style.userProfile}>
        <div className={style.ava}>
          <img onClick={ () => alert('Avatar!') }
            className={[style.edit, style.ava].join(' ')}
            src="/edit.png"
            alt="edit"
          />
          <img className={style.avatar} src={props.profile.photos.large} alt="avatar" />
        </div>
        <div className={style.userDescripshion}>
          <div className={style.name}>Natalia Komarova</div>
          <div className={style.param}>10.09.96</div>
          <div className={style.param}>Samara</div>
        </div>
      </div>
    </div>
  );
};
