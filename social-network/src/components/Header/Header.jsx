import React from 'react'
import style from './Header.module.scss'

export const Header = () => {
    return (
        <header className={style.header}>
            
                <img className={style.icon} src='/icon.png' alt="icon"/> 
                <h1 className={style.h1}>Social Network</h1>
            
        </header>
    )
}