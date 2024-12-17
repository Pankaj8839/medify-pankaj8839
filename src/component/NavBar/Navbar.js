import React from 'react';
import styles from './Navbar.module.css';
import logo from "../../assests/logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <span className={styles.logoText}>Medify</span>
      </div>
      <ul className={styles.navbarLinks}>
        <li><Link to="/" className={styles.navLink}>Find Doctors</Link></li>
        <li><Link to="/"  className={styles.navLink}>Hospitals</Link></li>
        <li><Link to="/"  className={styles.navLink}>Medicines</Link></li>
        <li><Link to="/"  className={styles.navLink}>Surgeries</Link></li>
        <li><Link to="/"  className={styles.navLink}>Software for Provider</Link></li>
        <li><Link to="/"  className={styles.navLink}>Facilities</Link></li>
      </ul>
      <button className={styles.navbarButton}>My Bookings</button>
    </nav>
  );
};

export default Navbar;