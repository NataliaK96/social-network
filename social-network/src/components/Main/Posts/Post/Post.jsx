import React from 'react'
import style from './Post.module.scss'

export const Post = (props) =>{
    return (
        <div>
            <div>
        Name: {props.name}     
                </div>   
    <span>Like {props.like}</span>
        </div>
    )
}