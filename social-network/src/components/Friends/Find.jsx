import React from 'react';
import SearchInput from '../SearchInput/SearchInput';
import UsersContainer from '../Users/UsersContainer';
import style from './Friends.module.scss'
import { ContentBox } from '../ContentBox/ContentBox';

export const Find = () => {
    return (
        <ContentBox className={style.friends}>
        <SearchInput/>
        <div>
        <UsersContainer/>
        </div>
        </ContentBox>
    )
}