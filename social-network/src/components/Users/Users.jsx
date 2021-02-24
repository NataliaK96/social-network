import React from 'react';
import { Paginator } from './Paginator';
import { User } from './User';

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
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
      />
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
