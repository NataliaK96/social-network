import React from 'react';
import style from './ContentBox.module.scss';

export const ContentBox = (props) => {
    return (
        <div className={style.contentBox + ' ' + props.className}>{props.children}</div>
    )
}
