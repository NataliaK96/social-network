import React, { useEffect, useState } from 'react';
import style from './ProfileInfo.module.scss';

export const ProfileGithubWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [github, setGithub] = useState(props.github);

  useEffect(() => {
    setGithub(props.github || 'None selected');
  }, [props.github]);

  const activateEditMode = () => {
    props.isOwner && setEditMode(true);
  };

  const deactivateEditMode = (event) => {
    if (event.charCode === 13) {
      setEditMode(false);
      props.updateProfile({
        ...props.profile,
        aboutMe: 'no value',
        lookingForAJobDescription: 'no value',
        contacts: {
          ...props.profile.contacts,
          github: github,
        },
      });
    }
  };

  const onGithubChange = (e) => {
    setGithub(e.currentTarget.value);
  };

  return (
    <div className={style.infoBlock}>
      {!editMode ? (
        <div className={style.status} onClick={activateEditMode}>
          {github}
        </div>
      ) : (
        <input
          className={style.statusInput}
          onChange={onGithubChange}
          autoFocus={true}
          onKeyPress={deactivateEditMode}
          value={github}
        />
      )}
    </div>
  );
};