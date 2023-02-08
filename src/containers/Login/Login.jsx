import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Button from '../../components/Button';
import Logo from '../../components/Logo';
import MainContainer from '../../components/MainContainer';
import TextField from '../../components/TextField';
import { login } from '../../store/actions/auth';

import styles from './styles.module.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const history = useHistory();

  useEffect(() => {
    if (auth.isAuthorized) {
      history.push('/');
    }
  }, [auth.isAuthorized]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!username || !password) {
      setError('Please enter both email and password.');
      return;
    }

    setError('');
    dispatch(login({ password, username }));
  };

  return (
    <MainContainer>
      <div className={styles.leftColumn}>
        <Logo />
        <form onSubmit={handleSubmit}>
          <div className={styles.container}>
            <TextField
              placeholder="Username"
              type="text"
              onChange={setUsername}
              value={username}
            />

            <TextField
              type="password"
              onChange={setPassword}
              value={password}
              placeholder="Password"
            />
            {(error || auth.invalidUser) && <div style={{ color: 'red' }}>{error || auth.invalidUser}</div>}

            <Button type="submit">Login</Button>
          </div>
        </form>
      </div>
      <div className={styles.rightColumn}>
        <h1 className={styles.title}>Show search</h1>
      </div>
    </MainContainer>
  );
};

export default Login;
