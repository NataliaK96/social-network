import React from 'react'
import { Dialogs } from '../Messages/Dialogs'
import style from './Main.module.scss'
import { Profile } from './Profile/Profile'

export const Main = () => {
    return (
            <div className={style.main}>
                <Dialogs/>
                {/* <Profile/> */}
            </div>
    

    )
}