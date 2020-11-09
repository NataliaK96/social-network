import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.scss'

export const Navbar = () => {
    return (
        <nav className={style.nav}>
        <ul >
          <li className={style.li}>
            <NavLink className={style.link} to="/profile" activeClassName={style.active} >
            <img className={style.icon} src="/home.png" alt="home"/>
              <h3>Profile</h3>
              </NavLink>
            </li>
            <li className={style.li}>
            <NavLink className={style.link} to="/messages" activeClassName={style.active}>
            <img className={style.icon} src="/message.png" alt="message"/>
              <h3>Messages</h3>
              </NavLink>
            </li>
            <li className={style.li}>
            <NavLink className={style.link} to="/friends" activeClassName={style.active}>
            <img className={style.icon} src="/friends.png" alt="friends"/>
              <h3>Friends</h3>
              </NavLink>
            </li>
            <li className={style.li}>
            <NavLink className={style.link} to="/news" activeClassName={style.active}>
            <img className={style.icon} src="/news.png" alt="news"/>
              <h3>News</h3>
              </NavLink>
            </li>
            <li className={style.li}>
            <NavLink className={style.link} to="/music" activeClassName={style.active}>
            <img className={style.icon} src="/music.png" alt="music"/>
              <h3>Music</h3>
              </NavLink>
            </li>
            <li className={style.li}>
            <NavLink className={style.link} to="/settings" activeClassName={style.active}>
            <img className={style.icon} src="/settings.png" alt="settings"/>
              <h3>Settings</h3>
              </NavLink>
            </li>
        </ul>
      </nav>
    )
}