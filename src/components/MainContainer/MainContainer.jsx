import React from 'react';
import styles from './styles.module.css';

type MainContainerProps = {
  children: React.Node,
};

const MainContainer = ({ children }: MainContainerProps) => (
  <div className={styles.container}>
    {children}
  </div>
);

export default MainContainer;
