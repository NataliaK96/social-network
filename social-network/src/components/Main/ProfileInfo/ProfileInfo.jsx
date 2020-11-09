import React from 'react'
import style from './ProfileInfo.module.scss'
import image from './../../../images/coconuts.jpg'

export const ProfileInfo = () => {
    return (
            <div className={style.profile}>
                <img className={style.img} src={image} alt="flowers"/>
                <div className={style.userProfile}>
                <img className={style.avatar} src="/user.png" alt="avatar"/> 
                <div className={style.userDescripshion}>
                <div className={style.name}>Natalia Komarova</div>
                <div className={style.param}>10.09.96</div>
                <div className={style.param}>Samara</div>
                </div>
                </div>
            </div>
    

    )
}