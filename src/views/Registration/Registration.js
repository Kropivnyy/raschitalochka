import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import IPhoneImg from '../../images/iPhone-6.png';
import IPhoneImg2x from '../../images/iPhone-6@2x.png';
import routes from '../../routes';
import FormLink from '../../components/Registration/FormLink';
import FormButton from '../../components/Registration/FormButton';
import styles from './Registration.module.css';

export default function RegisterView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [passwordConf, setPasswordConf] = useState('');

  const dispatch = useDispatch();

  const onRegister = useCallback(
    (name, email, password) =>
      dispatch(authOperations.registrationLogin(name, email, password)),
    [dispatch],
  );

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      // case 'passwordConf':
      //   setPasswordConf(value);
      //   break;

      default:
        console.warn(`Тип поля ${name} не обрабатывается`);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    // if ( password  !==  passwordConf ) {
    //   alert("password")
    //   resetState();
    //   return;
    // }

    onRegister({ name, email, password });
    resetState();
  };

  const resetState = () => {
    setName('');
    setEmail('');
    setPassword('');
    // setPasswordConf('');
  };

  return (
    <div className={styles.container}>
      <div className={styles.desktopWrap}>
        <div className={styles.sloganWrap}>
          <div className={styles.logoWrap}>
            <span className={styles.logoIcon}></span>
            <h2 className={styles.sloganTitle}>Raschitalochka</h2>
          </div>
          <p className={styles.slogan}>Create your own categories of costs</p>
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

            <label className={`${styles.label} ${styles.labelPass}`}>
              <input
                required
                minLength="8"
                pattern="[A-Za-z-0-9]{8,}"
                type="password"
                name="passwordConf"
                // value={passwordConf}
                placeholder="Password Confirmation"
                onChange={handleChange}
                className={styles.input}
              />
            </label>

            <div className={styles.progress}></div>

            <label className={`${styles.label} ${styles.labelName}`}>
              <input
                required
                type="text"
                name="name"
                value={name}
                placeholder="Your Name"
                onChange={handleChange}
                className={styles.input}
              />
            </label>
            <FormButton text={'Register'} />
            <FormLink route={routes.loginView} text={'Login'} />
          </form>
        </div>
      </div>
    </div>
  );
}
