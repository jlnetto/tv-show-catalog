import React from 'react';

import styles from './styles.module.css';

type SeasonButtonProps = {
  selected: boolean,
  children: string,
  // eslint-disable-next-line no-undef
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
};

const SeasonButton = ({ selected, children, onClick }: SeasonButtonProps) => (
  <button
    className={styles.textButton}
    style={{ color: selected ? '#00C4CC' : '#808080' }}
    type="button"
    onClick={onClick}
  >
    {children}
  </button>
);

export default SeasonButton;
