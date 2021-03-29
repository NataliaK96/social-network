import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { ContentBox } from '../../../../components/ContentBox/ContentBox';
import { Textarea } from '../../../../components/FormsControls/FormsControls';
import { required, maxLength } from '../../../../utils/validators/validators';
import { Post } from './Post/Post';
import style from './Posts.module.scss';

const maxLength300 = maxLength(300);

let AddNewPostForm = (props) => {
  console.log('AddNewPostForm', props)
  return (
    <form onSubmit={(e)=>{
      e.preventDefault()
      props.handleSubmit()
      props.reset()
      }} className={style.form}>
      <Field
        name="newPostText"
        component={Textarea}
        validate={[required, maxLength300]}
        placeholder={'Post message'}
      />
      <button>Add post</button>
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
      likeCount={p.likeCount}
      userAvatar={props.userAvatarSmall}
    />
  ));

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <ContentBox>
      <ContentBox>
        <AddNewPostFormRedux onSubmit={onAddPost} />
      </ContentBox>
      <div>{postsElements}</div>
    </ContentBox>
  );
});
