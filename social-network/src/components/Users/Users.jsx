import React from 'react';
import styleFriends from './../Friends/Friends.module.scss';
import { NavLink } from 'react-router-dom';
import { Button } from './../Button/Button';
import style from './Users.module.scss';
import * as axios from 'axios';

export class Users extends React.Component {
  getUsers = () => {
    if (this.props.users.length === 0) {
      axios
        .get('https://social-network.samuraijs.com/api/1.0/users')
        .then((response) => {
          this.props.setUsers(response.data.items);
        });
  }
  }
  render() {
    return (
    <div>
      <button onClick={this.getUsers}>Get Users</button>
      {this.props.users.map((u) => {
    const path = '/friends/' + u.id;
      return <div>
      <NavLink className={styleFriends.friend} to={path}>
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
            <button
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                this.props.unfollow(u.id);
              }}
            >
              Unfriend
            </button>
          ) : (
            <button
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                this.props.follow(u.id);
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
      })}
      </div>
    );
  }
}

