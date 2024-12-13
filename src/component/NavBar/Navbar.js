import React from 'react';
import styles from './Navbar.module.css';
import logo from "../../assests/logo.png";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <span className={styles.logoText}>Medify</span>
      </div>
      <ul className={styles.navbarLinks}>
        <li><a href="#find-doctors" className={styles.navLink}>Find Doctors</a></li>
        <li><a href="#hospitals" className={styles.navLink}>Hospitals</a></li>
        <li><a href="#medicines" className={styles.navLink}>Medicines</a></li>
        <li><a href="#surgeries" className={styles.navLink}>Surgeries</a></li>
        <li><a href="#software" className={styles.navLink}>Software for Provider</a></li>
        <li><a href="#facilities" className={styles.navLink}>Facilities</a></li>
      </ul>
      <button className={styles.navbarButton}>My Bookings</button>
    </nav>
  );
};

export default Navbar;