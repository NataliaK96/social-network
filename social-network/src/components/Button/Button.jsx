import React from 'react';
import style from './Button.module.scss'

export const Button = (props) => {
    let className
switch (props.type) {
    case 'default': 
    className= style.default
    break;
    case 'error': 
    className= style.error;
    break 
    default: 
    className= style.default
}
    return <button onClick={props.onClick} className={className}>
        {props.children}
    </button>
}
