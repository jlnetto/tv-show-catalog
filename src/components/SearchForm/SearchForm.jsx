import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { searchShow, resetTitle } from '../../store/actions/tvShowActions';
import TextField from '../TextField';
import Button from '../Button';

import styles from './styles.module.css';

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const data = useSelector(({ show }) => show);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(searchShow(searchTerm));
  };

  const handleSearch = (value) => {
    setSearchTerm(value);

    if (data.error) {
      dispatch(resetTitle());
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.container}>
        <TextField
          type="text"
          onChange={handleSearch}
          value={searchTerm}
          disabled={data.loading}
        />
        <Button type="submit" disabled={data.loading}>Go</Button>
      </div>
    </form>
  );
};

export default SearchForm;
