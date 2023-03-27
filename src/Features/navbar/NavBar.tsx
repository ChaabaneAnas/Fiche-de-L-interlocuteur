import styles from './navbar.module.css';
import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar: FC = () => {
  return (
    <nav className={styles.container}>
      <ul className={styles.navlist}>
        <NavLink className={styles.navitem} to='/'>
          Home
        </NavLink>
        <NavLink className={styles.navitem} to='/fiche'>
          Fich
        </NavLink>
        <NavLink className={styles.navitem} to='/about'>
          About
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;
