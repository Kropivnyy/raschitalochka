import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import IPhoneLogImg from '../../images/iPhone-6-login.png';
import IPhoneLogImg2x from '../../images/iPhone-6-login@2x.png';
import routes from '../../routes';
import FormLink from '../../components/Registration/FormLink';
import FormButton from '../../components/Registration/FormButton';
import styles from './Login.module.css';

export default function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const onLogin = useCallback(
    values => dispatch(authOperations.logIn(values)),
    [dispatch],
  );

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        console.warn(`Тип поля ${name} не обрабатывается`);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    onLogin({ email, password });
    resetState();
  };

  const resetState = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <div className={styles.container}>
      <div className={styles.desktopWrap}>
        <img
          className={styles.desktopWrapImg}
          src={window.devicePixelRatio > 1.5 ? IPhoneLogImg2x : IPhoneLogImg}
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
          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={`${styles.label} ${styles.labelEmail}`}>
              <input
                autoFocus
                required
                type="email"
                name="email"
                value={email}
                placeholder="E-mail as login"
                onChange={handleChange}
                className={styles.input}
              />
            </label>

            <label className={`${styles.label} ${styles.labelPass}`}>
              <input
                required
                minLength="8"
                pattern="[A-Za-z-0-9]{8,}"
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={handleChange}
                className={styles.input}
              />
            </label>
            <FormButton text={'Enter'} />
            <FormLink route={routes.registrationView} text={'Register'} />
          </form>
        </div>
      </div>
    </div>
  );
}
