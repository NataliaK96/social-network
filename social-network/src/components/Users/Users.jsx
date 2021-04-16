import React from 'react';
import { Paginator } from './Paginator';
import { User } from './User';
import style from './Users.module.scss';

export const Users = ({
  currentPage,
  onPageChanged,
  totalUsersCount,
  pageSize,
  users,
  ...props
}) => {
  return (
    <div>
      <div className={style.name}>
        <h4 className={style.h}>Users</h4>
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        />
        </div>
      {users.map(u => 
        <User
          user={u}
          followingInProgress={props.followingInProgress}     
          unfollow={props.unfollow}
          follow={props.follow}
        />
      )}
    </div>
  );
};
