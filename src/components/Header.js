import React from 'react';
import { Link } from 'react-router-dom';
import styles from './css/Header.module.css';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { UserContext } from '../context/userContext';

function Header() {
  const { data } = React.useContext(UserContext);

  return (
    <header className={`${styles.header}`}>
      <nav className={styles.nav}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <Logo />
        </Link>

        {data ? (
          <Link to="/dashboard" className={styles.login}>
            {data.username}
          </Link>
        ) : (
          <Link to="/login" className={styles.login}>
            Login / Register
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
