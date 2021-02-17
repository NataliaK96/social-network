import React, { useEffect, useState } from 'react';
import style from './ProfileInfo.module.scss';

export const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect( () => {
    setStatus(props.status)
  }, [props.status])

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = (event) => {
    if (event.charCode === 13) {
      setEditMode(false);
      props.updateStatus(status);
    }
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div className={style.status}>
      {!editMode ? (
        <div onClick={activateEditMode}>{props.status}</div>
      ) : (
        <div>
          <input
            className={style.statusInput}
            onChange={onStatusChange}
            autoFocus={true}
            onKeyPress={deactivateEditMode}
            value={status}
          />
        </div>
      )}
    </div>
  );
};
