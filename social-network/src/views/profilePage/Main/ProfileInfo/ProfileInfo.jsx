import React, { useState } from 'react';
import style from './ProfileInfo.module.scss';
import { Preloader } from '../../../../components/Preloader/Preloader';
import { ProfileStatusWithHooks } from './ProfileStatusWithHooks';
import { ThemesModal } from '../../Themes/ThemesModal';
import { ProfileGithubWithHooks } from './ProfileGithubWithHooks';

export const ProfileInfo = (props) => {
  const [showModal, setShowModal] = useState(false);
  if (!props.profile) {
    return <Preloader />;
  }
  let defaultAvatar = '/user.png';
  let userAvatar = props.profile.photos && props.profile.photos.large;

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  return (
    <>
      <div className={style.profile}>
        <div className={style.theme}>
          {props.isOwner && (
            <img
              className={[style.editTheme, style.theme].join(' ')}
              src="/edit.png"
              alt="edit"
              onClick={() => setShowModal(true)}
            />
          )}
          <img
            className={style.img}
            src={props.theme.src}
            alt={props.theme.alt}
          />
        </div>

        <div className={style.userProfile}>
          <div className={style.ava}>
            {props.isOwner && (
              <>
                <label htmlFor="file-input-ava">
                  <img
                    className={[style.ava, style.editAva].join(' ')}
                    src="/edit.png"
                    alt="edit"
                  />
                </label>
                <input
                  className={style.input}
                  id="file-input-ava"
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
            <div className={style.userInfo + ' ' + style.border}>
              <p className={style.label}>Nickname:</p>
              <div className={style.name}>{props.profile.fullName}</div>
            </div>
            <div className={style.border}>
              <div className={style.userInfo}>
                <p className={style.label}>Status:</p>
                <ProfileStatusWithHooks
                  status={props.status}
                  updateStatus={props.updateStatus}
                  isOwner={props.isOwner}
                />
              </div>
              <div className={style.userInfo}>
                <p className={style.label}>GitHub:</p>
                <ProfileGithubWithHooks
                  profile={props.profile}
                  github={props.profile.contacts.github}
                  isOwner={props.isOwner}
                  updateProfile={props.updateProfile}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <ThemesModal
          theme={props.theme}
          save={props.setTheme}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

// const ProfileData = ({profile}) => {
//   return <div>
//   <b>Contact</b>: {profile.contacts.github}
// </div>
// }
// const ProfileDataForm = ({profile}) => {
//   return <div>
//   <b>Contact</b>: {profile.contacts.github}
// </div>
// }
