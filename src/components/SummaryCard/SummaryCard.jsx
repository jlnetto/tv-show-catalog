import React from 'react';

import styles from './styles.module.css';

type Props = {
  image: string,
  description: String,
};

const SummaryCard = ({ image, description }: Props) => {
  if (!description) return null;

  return (
    <div className={styles.card}>
      <div className={styles.cardImgContainer}>
        <img src={image} className={styles.cardImg} alt={image} />
      </div>
      <div className={styles.cardDescriptionContainer}>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
    );
};

export default SummaryCard;
