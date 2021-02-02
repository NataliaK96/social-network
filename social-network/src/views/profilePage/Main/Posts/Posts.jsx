import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { ContentBox } from '../../../../components/ContentBox/ContentBox';
import { Post } from './Post/Post';
import style from './Posts.module.scss';

let AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field name="newPostText" component="textarea" className = {style.textarea}/>
      <button>Add post</button>
    </form>
  );
};

let AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(
  AddNewPostForm
);

export const Posts = (props) => {
  let postsElements = props.postData.map((p) => (
    <Post message={p.message} likeCount={p.likeCount} />
  ));

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <ContentBox>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div>{postsElements}</div>
    </ContentBox>
  );
};
