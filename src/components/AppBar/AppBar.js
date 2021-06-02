import React from 'react';
import { useSelector } from 'react-redux';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import styles from './AppBar.module.scss';
import { authSelectors } from '../../redux/auth';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
  return (
    <header className={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
