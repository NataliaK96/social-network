import React from 'react';
import { Post } from './Post/Post';
import style from './Posts.module.scss';

export const Posts = (props) => {
  let postsElements = props.postData.map((p) => (
    <Post message={p.message} likeCount={p.likeCount} />
  ));

  return (
    <div className={style.postsBlock}>
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div>{postsElements}</div>
    </div>
  );
};
