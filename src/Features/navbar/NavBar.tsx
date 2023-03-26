import styles from './navbar.module.css';
import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar: FC = () => {
  return (
    <nav>
      <ul>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/fiche'>Fich</NavLink>
        <NavLink to='/about'>About</NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;
