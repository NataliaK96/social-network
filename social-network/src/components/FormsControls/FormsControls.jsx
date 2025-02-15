import React from 'react';
import style from './FormsControls.module.scss';
import { Field } from 'redux-form';
import { MultilineTextFields } from '../TextField/Textarea';

const FormControl = ({ input, meta, child, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={style.formControl + ' ' + (hasError ? style.error : '')}>
      <div>{props.children}</div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, child, label, ...restProps } = props;
  return (
    <FormControl {...props}>
      <MultilineTextFields {...input} {...restProps} label={label}/>
    </FormControl>
  );
};

export const Input = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input className={style.textarea} {...input} {...restProps} />
    </FormControl>
  );
};

export const createField = (name, component, validate, type, placeholder, text = '') => (
  <div className={style.field}>
    <Field
      name={name}
      component={component}
      validate={validate}
      type={type}
      placeholder={placeholder}
    />{text}
  </div>
);
