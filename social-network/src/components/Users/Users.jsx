import React from 'react';
import styleFriends from '../../views/friendsPage/Friends/Friends.module.scss';
import { NavLink } from 'react-router-dom';
import { Button } from '../Button/Button';
import style from './Users.module.scss';

export const Users = (props) => {
  /*let pagesCount = Math.ceil(
        props.totalUsersCount / props.pageSize
      );*/
  let pages = [];
  for (let i = 1; i <= 20; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div className={style.number}>
        {pages.map((p) => {
          return (
            <span
              className={(props.currentPage === p && style.selectedPage).toString()}
              onClick={() => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => {
        const path = '/profile/' + u.id;
        return (
          <div>
            <NavLink className={styleFriends.user} to={path}>
              <div className={styleFriends.userName}>
                <img
                  className={styleFriends.avatar}
                  src={u.photos.small != null ? u.photos.small : '/user.png'}
                  alt="avatar"
                />
                <span>
                  <p>{u.name}</p>
                  <p className={style.location}>
                    {'u.location.city'}, {'u.location.country'}
                  </p>
                </span>
              </div>
              <div className={style.buttons}>
                {u.followed ? (
                  <button disabled={props.followingInProgress.some(id => id === u.id)}
                    onClick={(e) => {
                      e.preventDefault();
                      props.unfollow(u.id)
                    }}
                  >
                    Unfriend
                  </button>
                ) : (
                  <button disabled={props.followingInProgress.some(id => id === u.id)}
                    onClick={(e) => {
                      e.preventDefault();
                      props.follow(u.id)
                    }}
                  >
                    Add friend
                  </button>
                )}
                <button>Write message</button>
                <Button type="default">DEFAULT</Button>
              </div>
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};
