import React from 'react';
import style from './ProfileInfo.module.scss';
import image from '../../../../images/coconuts.jpg';
import { Preloader } from '../../../../components/Preloader/Preloader';
import { ProfileStatusWithHooks } from './ProfileStatusWithHooks';

export const ProfileInfo = (props) => {
  if (!props.profile){
    return <Preloader/>
  }
  let defaultAvatar = "/user.png"
  let userAvatar = props.profile.photos.large

  return (
    <div className={style.profile}>
      <div className={style.theme}>
        <img onClick={ () => alert('hello!') }
          className={[style.editTheme, style.theme].join(' ')}
          src="/edit.png"
          alt="edit"
        />
        <img className={style.img} src={image} alt="flowers" />
      </div>
      <div className={style.userProfile}>
        <div className={style.ava}>
          <img onClick={ () => alert('Avatar!') }
            className={[ style.ava, style.editAva].join(' ')}
            src="/edit.png"
            alt="edit"
          />
          <img className={style.avatar} src={userAvatar || defaultAvatar} alt="avatar" />
        </div>
        <div className={style.userDescripshion}>
          <div className={style.nameAndStatus}>
            <div className={style.name}>
            Natalia Komarova
            </div>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
          <div className={style.param}>10.09.96</div>
          <div className={style.param}>Samara</div>
        </div>
      </div>
    </div>
  );
};
