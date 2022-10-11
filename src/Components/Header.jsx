import React from "react";
import Toogle from './Toogle'
import styles from '../assets/styles/Header.module.css'

const Header = () => {
  return (
    <>
      <header>
        <h1 className={styles.title}>Social Media Dashboard</h1>
        <p className={styles.follows}>Total Followers : 23,004</p>
        
        <div className={styles.hr}></div>
       
        <Toogle />
      </header>
    </>
  );
};

export default Header;
