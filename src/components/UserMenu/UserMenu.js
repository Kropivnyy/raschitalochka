import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import styles from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const onLogOut = useCallback(() => dispatch(authOperations.logOut()), [
    dispatch,
  ]);
  return (
    <div className="">
      <span className={styles.name}>{name}</span>
      <button type="button" onClick={onLogOut}>
        Logout
      </button>
    </div>
  );
}
