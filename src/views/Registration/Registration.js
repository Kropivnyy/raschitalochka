import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authOperations, authSelectors } from '../../redux/auth';
import IPhoneImg from '../../images/iPhone-6.png';
import IPhoneImg2x from '../../images/iPhone-6@2x.png';
import routes from '../../routes';
import FormLink from '../../components/Registration/FormLink';
import FormButton from '../../components/Registration/FormButton';
import styles from './Registration.module.css';
import { Field, Formik, Form, ErrorMessage } from 'formik';

export default function RegisterView() {
  const dispatch = useDispatch();
  const isLoading = useSelector(authSelectors.getUserIsLoading);

  const onRegister = useCallback(
    values => dispatch(authOperations.registrationLogin(values)),
    [dispatch],
  );

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '', passwordConf: '' }}
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
        } else if (values.passwordConf !== values.password) {
          errors.passwordConf = 'Passwords must match';
        } else if (!values.name) {
          errors.name = 'Name is required';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        onRegister({
          name: values.name,
          email: values.email,
          password: values.password,
        });
        setSubmitting(false);
        resetForm();
      }}
    >
      {({ values, handleChange, handleSubmit }) => (
        <div className={styles.container}>
          <div className={styles.desktopWrap}>
            <div className={styles.sloganWrap}>
              <div className={styles.logoWrap}>
                <span className={styles.logoIcon}></span>
                <h2 className={styles.sloganTitle}>Raschitalochka</h2>
              </div>
              <p className={styles.slogan}>
                Create your own categories of costs
              </p>
            </div>
            <img
              className={styles.desktopWrapImg}
              src={window.devicePixelRatio > 1.5 ? IPhoneImg2x : IPhoneImg}
              alt="IPhone"
            />
          </div>
          <div className={styles.mainRegisterWrap}>
            <div className={styles.registerWrap}>
              <div className={styles.logo}></div>
              <h2 className={styles.headerMob}>Raschitalochka</h2>
              <h2 className={styles.header}>Registration</h2>
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

                <label className={`${styles.label} ${styles.labelPass}`}>
                  <Field
                    type="password"
                    name="passwordConf"
                    value={values.passwordConf}
                    placeholder="Password Confirmation"
                    onChange={handleChange}
                    className={styles.input}
                  />
                  <ErrorMessage
                    name="passwordConf"
                    component="p"
                    className={styles.inputError}
                  />
                </label>

                {/* <div className={styles.progress}></div> */}

                <label className={`${styles.label} ${styles.labelName}`}>
                  <Field
                    autoFocus
                    type="text"
                    name="name"
                    value={values.name}
                    placeholder="Your Name"
                    onChange={handleChange}
                    className={styles.input}
                  />
                  <ErrorMessage
                    name="name"
                    component="p"
                    className={styles.inputError}
                  />
                </label>
                <FormButton text={'Register'} isLoad={isLoading} />
                <FormLink route={routes.loginView} text={'Login'} />
              </Form>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
}
