import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useStyles } from './Textarea.styles';

export const MultilineTextFields = (props) => {
  const classes = useStyles();
  return (
    <TextField
      id="outlined-textarea"
      label={props.label}
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
