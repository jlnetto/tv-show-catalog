import React from 'react';
import { useSelector } from 'react-redux';
import styles from './styles.module.css';

const Header = () => {
  const data = useSelector((state) => state);
  const { isAuthorized } = data.auth;
  const { headerTitle } = data.show;

  return (
    <div className={styles.container}>
      {isAuthorized ? headerTitle : 'Landing/Login'}
    </div>
  );
};

export default Header;
