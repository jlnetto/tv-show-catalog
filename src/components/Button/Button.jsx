import React from 'react';

import styles from './styles.module.css';

type ButtonProps = {
  type: 'button' | 'submit' | 'reset',
  children: React.Node | string,
  disabled: boolean,
};

const Button = ({ type, children, disabled }: ButtonProps) =>
  <button className={styles.customButton} type={type} disabled={disabled}>{children}</button>;

export default Button;
