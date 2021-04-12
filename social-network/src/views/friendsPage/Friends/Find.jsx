import React from 'react';
import UsersContainer from '../../../components/Users/UsersContainer';
import style from './Friends.module.scss'
import { ContentBox } from '../../../components/ContentBox/ContentBox';

export const Find = () => {
    return (
        <ContentBox className={style.friends}>
        <div>
        <UsersContainer/>
        </div>
        </ContentBox>
    )
}