import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import routes from '../../routes';
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
    <div className={styles.Login__container}>
      <h2>Login page</h2>
      <form onSubmit={handleSubmit} className="">
        <label className="">
          <input
            autoFocus
            required
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={handleChange}
            className=""
          />
        </label>
        <label className="">
          <input
            required
            minLength="8"
            pattern="[A-Za-z-0-9]{8,}"
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={handleChange}
            className=""
          />
        </label>
        <button type="submit"> Log in</button>
      </form>
      <a href={routes.registrationView}>Registration</a>
    </div>
  );
}
