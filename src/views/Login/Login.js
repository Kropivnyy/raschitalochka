import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authOperations, authSelectors } from '../../redux/auth';
import IPhoneLogImg from '../../images/iPhone-6-login.png';
import IPhoneLogImg2x from '../../images/iPhone-6-login@2x.png';
import routes from '../../routes';
import FormLink from '../../components/Registration/FormLink';
import FormButton from '../../components/Registration/FormButton';
import styles from './Login.module.css';
import { Field, Formik, Form, ErrorMessage } from 'formik';

export default function LoginView() {
  const dispatch = useDispatch();
  const userError = useSelector(authSelectors.getUserError);
  const isLoading = useSelector(authSelectors.getUserIsLoading);

  const onLogin = useCallback(
    values => dispatch(authOperations.logIn(values)),
    [dispatch],
  );

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Email is required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        } else if (!values.password) {
          errors.password = 'Password is required';
        } else if (values.password.length < 8) {
          errors.password = 'Min password length must be 8 symbol';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        onLogin(values);
        setSubmitting(false);
        resetForm();
      }}
    >
      {({ values, handleChange, handleSubmit }) => (
        <div className={styles.container}>
          <div className={styles.desktopWrap}>
            <img
              className={styles.desktopWrapImg}
              src={
                window.devicePixelRatio > 1.5 ? IPhoneLogImg2x : IPhoneLogImg
              }
              alt="IPhone"
            />
            <p className={styles.loginSlogan}>
              Manage your budget with finance app
            </p>
          </div>
          <div className={styles.mainLoginWrap}>
            <div className={styles.loginWrap}>
              <div className={styles.headerWrap}>
                <div className={styles.logo}></div>
                <h2 className={styles.header}>Raschitalochka</h2>
              </div>
              <Form className={styles.form} onSubmit={handleSubmit}>
                <label className={`${styles.label} ${styles.labelEmail}`}>
                  <Field
                    autoFocus
                    type="text"
                    name="email"
                    value={values.email}
                    placeholder="E-mail as login"
                    onChange={handleChange}
                    className={styles.input}
                  />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className={styles.inputError}
                  />
                </label>

                <label className={`${styles.label} ${styles.labelPass}`}>
                  <Field
                    type="password"
                    name="password"
                    value={values.password}
                    placeholder="Password"
                    onChange={handleChange}
                    className={styles.input}
                  />
                  <ErrorMessage
                    name="password"
                    component="p"
                    className={styles.inputError}
                  />
                </label>
                {userError && (
                  <p className={styles.userError}>Check email or password</p>
                )}
                <FormButton text={'Enter'} isLoad={isLoading} />
                <FormLink route={routes.registrationView} text={'Register'} />
              </Form>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
}
