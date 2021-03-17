import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import { login } from '../../redux/authReducer';
import { required } from '../../utils/validators/validators';
import { createField, Input } from '../FormsControls/FormsControls';
import styleForm from '../FormsControls/FormsControls.module.scss';
import style from './Login.module.scss';
import { Button } from '../Button/Button';

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit} className={style.loginField}>
      {createField('email', Input, [required], 'email', 'Email')}
      {createField('password', Input, [required], 'password', 'Password')}
      <div className={style.remember}>
      {createField('rememberMe', Input, null, 'checkbox', null)}
      Remember me
      </div>
      {error && <div className={styleForm.formSummaryError}>{error}</div>}
      <div className={style.loginButtonDiv}>
      <Button type='submit' styleType="login" className={style.loginButton}>Login</Button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={'/profile'} />;
  }
  return (
    <div className={style.login_wrapper}>
    <div className={style.loginForm}>
      <h1>Welcome!</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, { login })(Login);
