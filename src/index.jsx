import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './styles/global.module.css';
import store from './store/configureStore';


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
