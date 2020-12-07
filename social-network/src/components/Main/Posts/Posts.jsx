import React from 'react';
import { Post } from './Post/Post';
import style from './Posts.module.scss';

export const Posts = (props) => {
  let postsElements = props.postData.map((p) => (
    <Post message={p.message} likeCount={p.likeCount} />
  ));

  let newPostElement = React.createRef();

    let onAddPost = () => {
      props.addPost()
    }

    let onPostChange = () => {
      let text = newPostElement.current.value;
      props.updateNewPostText(text)
    }
  return (
    <div className={style.postsBlock}>
      <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
        <button onClick={ onAddPost }>Add post</button>
      </div>
      <div>{postsElements}</div>
    </div>
  );
};
