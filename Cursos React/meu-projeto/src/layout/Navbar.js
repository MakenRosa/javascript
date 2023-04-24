import { Link } from "react-router-dom";
import React from 'react';
import styles from './Navbar.module.css';

function Navbar() {
    return (
    <ul className={styles.list}>
      <li><Link to="/">Home</Link></li> 
      <li><Link to="/empresa">Empresa</Link></li>
      <li><Link to="/contato">Contato</Link></li>
    </ul>
    );
}

export default Navbar;