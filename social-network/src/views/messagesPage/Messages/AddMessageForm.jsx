import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button } from '../../../components/Button/Button';
import { Textarea } from '../../../components/FormsControls/FormsControls';
import { required, maxLength } from '../../../utils/validators/validators';
import style from './Dialogs.module.scss';

const maxLength1000 = maxLength(1000);
const AddMessageForm = (props) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.handleSubmit();
        props.reset();
      }}
      className={style.form}
    >
      <div className={style.input}>
        <Field
          component={(props) => <Textarea {...props} label={'Add message'} />}
          validate={[required, maxLength1000]}
          name="newMessageBody"
          className={style.field}
        />
      </div>
      <div>
      <button className={style.submit}>
        <Button styleType="send">Send</Button>
      </button>
      </div>
    </form>
  );
};

export const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(
  AddMessageForm
);
