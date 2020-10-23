import React from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import styles from './UserMenu.module.css';

export default function UserMenu() {
  const name = useSelector(authSelectors.getUserName);

  return (
    <div className="">
      <span className={styles.name}>{name}</span>
      <button type="button" onClick={null}>
        Logout
      </button>
    </div>
  );
}
