import React from 'react';
import { ContentBox } from '../../ContentBox/ContentBox';
import { Post } from './Post/Post';

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
    <ContentBox>
      <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
        <button onClick={ onAddPost }>Add post</button>
      </div>
      <div>{postsElements}</div>
    </ContentBox>
  );
};
