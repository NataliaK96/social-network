import React from 'react'
import style from './Profile.module.scss'
import { Posts } from '../Posts/Posts'
import {ProfileInfo} from './../ProfileInfo/ProfileInfo'


export const Profile = () => {
    return (
            <div className={style.profile}>
                <ProfileInfo/>
                <Posts/>
            </div>
    

    )
}