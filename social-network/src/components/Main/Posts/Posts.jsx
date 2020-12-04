import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import { Post } from './Post/Post';
import style from './Posts.module.scss';

export const Posts = (props) => {
  let postsElements = props.postData.map((p) => (
    <Post message={p.message} likeCount={p.likeCount} />
  ));

  let newPostElement = React.createRef();

    let addPost = () => {
      props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
      let text = newPostElement.current.value;
      props.dispatch(updateNewPostTextActionCreator(text))
    }
  return (
    <div className={style.postsBlock}>
      <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
        <button onClick={ addPost }>Add post</button>
      </div>
      <div>{postsElements}</div>
    </div>
  );
};
