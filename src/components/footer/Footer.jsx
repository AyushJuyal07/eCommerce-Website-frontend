import React from 'react';
import styles from "./Footer.module.scss";

const Footer = () => {
  const year = new Date().getFullYear(); // Get the current year directly
  return <div className={styles.footer}>&copy;{year} All Rights Reserved</div>;
};

export default Footer;
