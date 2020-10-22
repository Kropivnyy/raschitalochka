import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';

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
    <div className="">
      <h2>Register page</h2>
      <form className="" onSubmit={handleSubmit}>
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

        {/* <label className="">
          <input
            required
            minLength="8"
            pattern="[A-Za-z-0-9]{8,}"
            type="password"
            name="passwordConf"
            value={passwordConf}
            placeholder="Password Confirmation"
            onChange={handleChange}
            className=""
          />
        </label> */}

        <label className="">
          <input
            required
            type="text"
            name="name"
            value={name}
            placeholder="Name"
            onChange={handleChange}
            className=""
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
