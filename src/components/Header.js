import React from 'react';
import { Link } from 'react-router-dom';
import styles from './css/Header.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login / Register</Link>
      </nav>
    </div>
  );
}

export default Header;
