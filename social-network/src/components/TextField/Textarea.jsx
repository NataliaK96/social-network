import React from 'react';
import TextField from '@material-ui/core/TextField';
import { styleTextarea } from './Textarea.styles';

export const MultilineTextFields = (props) => {
  const classes = styleTextarea();
  return (
    <TextField
      id="outlined-textarea"
      label="Post message"
      placeholder="Post message"
      multiline
      variant="outlined"
      className={classes.root}
      value={props.value}
      onChange={(e)=>{
          props.onChange(e.target.value)
        }}
    />
  );
};
