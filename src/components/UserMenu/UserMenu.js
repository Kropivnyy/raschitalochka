import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import styles from './UserMenu.module.css';
import { ReactComponent as LogoutLogo } from '../../svg/logout.svg';
import Media from 'react-media';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const onLogOut = useCallback(() => dispatch(authOperations.logOut()), [
    dispatch,
  ]);
  return (
    <div className={styles.UserMenu}>
      <span className={styles.name}>{name}</span>
      <button type="button" className={styles.button} onClick={onLogOut}>
        <LogoutLogo className={styles.logoutLogo} />
      </button>
      <Media
        queries={{
          tablet: '(min-width: 768px)',
        }}
      >
        {matches => (
          <>{matches.tablet && <span className={styles.logout}>Logout</span>}</>
        )}
      </Media>
    </div>
  );
}
