import React from 'react';
import { Button as ButtonBase } from '@material-ui/core';
import {useStyles} from './Button.styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import SaveIcon from '@material-ui/icons/Save';

export const Button = (props) => {
    const classes = useStyles();
  let className;
  let startIcon;
  let endIcon;
  switch (props.type) {
    case 'delete':
      startIcon = <DeleteIcon />;
      className = classes.delete;
      break;
    case 'upload':
      className = classes.upload;
      startIcon = <CloudUploadIcon />;
      break;
    case 'save':
      className = classes.save;
      startIcon = <SaveIcon />;
      break;
    case 'send':
      className = classes.send;
      break;
    default:
      className = classes.default;
  }
  return (
    <ButtonBase
      startIcon={startIcon}
      size="small"
      variant="contained"
      onClick={props.onClick}
      className={className}
      endIcon={endIcon}
    >
      {props.children}
    </ButtonBase>
  );
};
