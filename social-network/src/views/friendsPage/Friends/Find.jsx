import React from 'react';
import SearchInput from '../../../components/SearchInput/SearchInput';
import UsersContainer from '../../../components/Users/UsersContainer';
import style from './Friends.module.scss'
import { ContentBox } from '../../../components/ContentBox/ContentBox';

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