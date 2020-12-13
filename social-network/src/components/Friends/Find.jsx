import React from 'react';
import SearchInput from '../SearchInput/SearchInput';
import { UsersContainer } from '../Users/UsersContainer';
import style from './Friends.module.scss'

export const Find = () => {
    return (
        <div className={style.friends}>
        <SearchInput/>
        <UsersContainer/>
        </div>
    )
}