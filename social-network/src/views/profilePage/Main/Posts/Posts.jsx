import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button } from '../../../../components/Button/Button';
import { ContentBox } from '../../../../components/ContentBox/ContentBox';
import { Textarea } from '../../../../components/FormsControls/FormsControls';
import { required, maxLength } from '../../../../utils/validators/validators';
import { Post } from './Post/Post';
import style from './Posts.module.scss';

const maxLength300 = maxLength(300);

let AddNewPostForm = (props) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.handleSubmit();
        props.reset();
      }}
      className={style.form}
    >
      <Field
        name="newPostText"
        component={(props)=><Textarea {...props} label={'New post'}/>}
        validate={[required, maxLength300]}
        className={style.field}
      />
      <button className={style.submit}>
        <Button styleType="send">Add post</Button>
      </button>
    </form>
  );
};

let AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(
  AddNewPostForm
);

export const Posts = React.memo((props) => {
  let postsElements = props.postData.map((p) => (
    <Post
      message={p.message}
      userAvatar={props.userAvatarSmall}
      delete={props.deletePost}
      id={p.id}
      key={p.id}
    />
  ));

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <ContentBox>
      {props.isOwner && (
        <ContentBox className={style.contentBox}>
          <AddNewPostFormRedux onSubmit={onAddPost} />
        </ContentBox>
      )}
      <div className={style.posts}>{postsElements}</div>
    </ContentBox>
  );
});
