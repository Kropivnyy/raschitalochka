import React from 'react';
import AppBar from '../components/AppBar';
import Sidebar from '../components/Sidebar';
import styles from './MainLayout.module.css';

export default function MainLayout({ children }) {
  return (
    <>
      <AppBar />
      <div className={styles.MainLayout}>
        <div className={styles.Container}>
          <aside className={styles.Sidebar}>
            <div className={styles.Sidebar__container}>
              <Sidebar />
            </div>
          </aside>
          <section className={styles.Page}>{children}</section>
        </div>
      </div>
    </>
  );
}
