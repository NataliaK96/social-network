import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../../components/FormsControls/FormsControls';
import { required, maxLength } from '../../../utils/validators/validators';

const maxLength1000 = maxLength(1000);
const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={(props)=><Textarea {...props} label={'Add message'}/>}
          validate={[required, maxLength1000]}
          name="newMessageBody"
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

export const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(
  AddMessageForm
);
