import React from 'react';

import styles from './styles.module.css';

type Props = {
  type: string,
  onChange: (query: string) => void,
  disabled?: boolean,
  value: string,
  placeholder: string,
};

const TextField = ({
  type,
  onChange,
  disabled,
  value,
  placeholder,
}: Props) => (
  <input
    className={styles.customInput}
    type={type}
    onChange={(event) => onChange(event.target.value)}
    disabled={disabled}
    value={value}
    placeholder={placeholder}
  />
);

TextField.defaultProps = {
  disabled: false,
};

export default TextField;
