import React from 'react';
import moment from 'moment/moment';
import TvLogo from '../../assets/logo.svg';

import styles from './styles.module.css';

type EpisodeCardProps = {
  episode: {
    airdate: string,
    image: {
      medium: string,
      original: string,
    },
    season: number,
    name: string,
    summary: string,
    number: number,
  }
};

const EpisodeCard = ({ episode }: EpisodeCardProps) => (
  <div className={styles.container}>
    <div className={styles.leftColumn}>
      <img
        className={styles.episodeImage}
        src={(episode?.image?.original || episode?.image?.medium) ?? TvLogo}
        alt={episode?.name}
      />
    </div>
    <div className={styles.rightColumn}>
      <p>{`${moment(episode?.airdate).format('MMMM Do, YYYY') ?? '-'}, Season ${episode?.season?.toString?.() ?? '-'}, Episode ${episode?.number?.toString?.() ?? '-'}`}</p>
      <h3>Summary:</h3>
      {episode?.summary ? (<div dangerouslySetInnerHTML={{ __html: episode.summary }} />) : 'No summary provided!'}
    </div>
  </div>
);

export default EpisodeCard;
