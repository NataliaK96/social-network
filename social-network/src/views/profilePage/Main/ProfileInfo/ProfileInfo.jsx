import React from 'react';
import style from './ProfileInfo.module.scss';
import image from '../../../../images/coconuts.jpg';
import { Preloader } from '../../../../components/Preloader/Preloader';
import { ProfileStatusWithHooks } from './ProfileStatusWithHooks';

export const ProfileInfo = (props) => {
  const ref = React.createRef();
  if (!props.profile) {
    return <Preloader />;
  }
  let defaultAvatar = '/user.png';
  let userAvatar = props.profile.photos.large;

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  return (
    <div className={style.profile}>
      <div className={style.theme}>
        {props.isOwner && (
          <>
            <label htmlFor="file-input">
              <img
                className={[style.editTheme, style.theme].join(' ')}
                src="/edit.png"
                alt="edit"
              />
            </label>
            <input className={style.input} id="file-input" type="file" />
          </>
        )}
        <img className={style.img} src={image} alt="flowers" />
      </div>

      <div className={style.userProfile}>
        <div className={style.ava}>
          {props.isOwner && (
            <>
              <img
                onClick={(e) => {
                  ref.current.click();
                }}
                className={[style.ava, style.editAva].join(' ')}
                src="/edit.png"
                alt="edit"
              />
              <input
                ref={ref}
                className={style.input}
                id="file-input"
                onChange={onMainPhotoSelected}
                type="file"
              />
            </>
          )}
          <img
            className={style.avatar}
            src={userAvatar || defaultAvatar}
            alt="avatar"
          />
        </div>

        <div className={style.userDescripshion}>
          <div className={style.nameAndStatus}>
            <div className={style.name}>Natalia Komarova</div>
            <ProfileStatusWithHooks
              status={props.status}
              updateStatus={props.updateStatus}
            />
          </div>
          <div className={style.param}>10.09.96</div>
          <div className={style.param}>Samara</div>
        </div>
      </div>
    </div>
  );
};
