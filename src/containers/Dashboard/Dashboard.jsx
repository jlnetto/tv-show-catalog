import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './styles.module.css';

import { fetchEpisodes } from '../../store/actions/tvShowActions';

import MainContainer from '../../components/MainContainer';
import Logo from '../../components/Logo';
import SearchForm from '../../components/SearchForm';
import SummaryCard from '../../components/SummaryCard';
import Spinner from '../../components/Spinner';
import SeasonButton from '../../components/SeasonButton';
import EpisodeCard from '../../components/EpisodeCard';


const Dashboard = () => {
  const tvShowData = useSelector(({ show }) => show);
  const dispatch = useDispatch();

  const handleSeason = (seasonId) => {
    dispatch(fetchEpisodes(seasonId));
  };


  return (
    <MainContainer>
      <div className={styles.leftColumn}>
        <Logo />
        <SearchForm />

        <div className={styles.seasonColumn}>
          {tvShowData?.seasons && tvShowData.seasons.map((season, index) => (
            <SeasonButton
              key={season?.id}
              type="button"
              selected={season.id === tvShowData.selectedSeason}
              onClick={() => handleSeason(season.id)}
            >
              {`Season ${index + 1}`}
            </SeasonButton>
          ))}
        </div>
      </div>
      <div className={styles.rightColumn}>
        <h1 className={styles.title} >{tvShowData.title}</h1>
        {tvShowData.loading ?
          <div className={styles.loadingContainer}>
            <Spinner />
          </div> : (
            <div className={styles.mainContent}>
              <SummaryCard
                image={tvShowData.data?.image?.original}
                description={tvShowData.data?.summary}
              />
              {tvShowData.episodes.map(episode => (
                <EpisodeCard key={episode.id} episode={episode} />
              ))}
            </div>
          )}
      </div>
    </MainContainer>
  );
};

export default Dashboard;
