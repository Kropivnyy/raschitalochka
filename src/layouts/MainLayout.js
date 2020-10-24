import React from 'react';
import Sidebar from '../components/Sidebar';
import styles from './MainLayout.module.css';

export default function AppBar({ children }) {
  return (
    <div className={styles.MainLayout}>
      <aside className={styles.Sidebar}>
        <Sidebar />
      </aside>
      <section className={styles.Page}>{children}</section>
    </div>
  );
}
