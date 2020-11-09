import React from 'react';
import { Post } from './Post/Post';
import style from './Posts.module.scss';

export const Posts = (props) => {
  let postData = [
    { id: 1, message: 'It\'s my first post', likeCount:12 },
    { id: 2, message: 'Ho ho ho!', likeCount:20 }
  ];

  let postsElements = postData.map( p => <Post message={p.message} likeCount={p.likeCount}/> )

  return (
    <div className={style.postsBlock}>
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div>
        {postsElements}
      </div>
    </div>
  );
};
