import React from 'react';
// import { useSelector } from 'react-redux';
// import { authSelectors } from '../../redux/auth';
import styles from './Navigation.module.css';
import UserMenu from '../UserMenu';
import Wrapper from '../Wrapper';

export default function Navigation() {
  return (
    <nav className={styles.Navigation__container}>
      <>
        <Wrapper>
          <UserMenu />
        </Wrapper>
      </>
    </nav>
  );
}
