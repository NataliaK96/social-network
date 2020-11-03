import React from 'react'
import style from './Profile.module.scss'
import image from './../../../images/coconuts.jpg'
import { Posts } from '../Posts/Posts'


export const Profile = () => {
    return (
            <div className={style.profile}>
                <img className={style.img} src={image} alt="flowers"/>
                <img className={style.avatar} src="user.png" alt="avatar"/> 
                <Posts/>
            </div>
    

    )
}