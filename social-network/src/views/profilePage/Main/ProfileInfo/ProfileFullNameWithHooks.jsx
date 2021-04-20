import React, { useEffect, useState } from 'react';
import style from './ProfileInfo.module.scss';

export const ProfileFullNameWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [fullname, setFullname] = useState(props.fullname);

  useEffect(() => {
    setFullname(props.fullname || 'Nickname');
  }, [props.fullname]);

  const activateEditMode = () => {
    props.isOwner && setEditMode(true);
  };

  const deactivateEditMode = (event) => {
    if (event.charCode === 13) {
      setEditMode(false);
      props.updateProfile({
        ...props.profile,
        fullName: fullname,
      });
    }
  };

  const onFullnameChange = (e) => {
    setFullname(e.currentTarget.value);
  };

  return (
    <div className={style.infoBlock}>
      {!editMode ? (
        <div className={style.status} onClick={activateEditMode}>
          {fullname}
        </div>
      ) : (
        <input
          className={style.statusInput}
          onChange={onFullnameChange}
          autoFocus={true}
          onKeyPress={deactivateEditMode}
          value={fullname}
        />
      )}
    </div>
  );
};

