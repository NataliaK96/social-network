import React from 'react';
import style from './ProfileInfo.module.scss';
import image from './../../../images/coconuts.jpg';

export const ProfileInfo = () => {
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
          <img className={style.avatar} src="/user.png" alt="avatar" />
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
