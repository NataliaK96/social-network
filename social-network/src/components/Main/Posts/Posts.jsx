import React from 'react'
import { Post } from './Post/Post'
import style from './Posts.module.scss'

export const Posts = () =>{
    return (
        <div>
            <Post name='Natasha' like='20'/>
            <Post name='Sergay' like='35'/>

            
        </div>
    )
}