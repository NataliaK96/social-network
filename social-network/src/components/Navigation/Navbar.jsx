import React from 'react';
import style from './Navbar.module.scss'

export const Navbar = () => {
    return (
        <nav className={style.nav}>
        <ul >
          <li className={style.li}>
            <a className={style.link} href="/profile">
            <img className={style.icon} src="home.png" alt="home"/>
              <h3>Profile</h3>
              </a>
            </li>
            <li className={style.li}>
            <a className={style.link} href="/messages">
            <img className={style.icon} src="message.png" alt="message"/>
              <h3>Messages</h3>
              </a>
            </li>
            <li className={style.li}>
            <a className={style.link} href="/friends">
            <img className={style.icon} src="friends.png" alt="friends"/>
              <h3>Friends</h3>
              </a>
            </li>
            <li className={style.li}>
            <a className={style.link} href="/news">
            <img className={style.icon} src="news.png" alt="news"/>
              <h3>News</h3>
              </a>
            </li>
            <li className={style.li}>
            <a className={style.link} href="/music">
            <img className={style.icon} src="music.png" alt="music"/>
              <h3>Music</h3>
              </a>
            </li>
            <li className={style.li}>
            <a className={style.link} href="/settings">
            <img className={style.icon} src="settings.png" alt="settings"/>
              <h3>Settings</h3>
              </a>
            </li>
        </ul>
      </nav>
    )
}