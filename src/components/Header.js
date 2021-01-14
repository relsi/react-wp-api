import React from 'react';
import { Link } from 'react-router-dom';
import styles from './css/Header.module.css';
import { ReactComponent as Logo } from '../assets/logo.svg';

function Header() {
  return (
    <header className={`${styles.header} container`}>
      <nav className={styles.nav}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <Logo />
        </Link>
        <Link to="/login" className={styles.login}>
          Login / Register
        </Link>
      </nav>
    </header>
  );
}

export default Header;
