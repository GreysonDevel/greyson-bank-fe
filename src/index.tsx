import React from 'react';
import Axios from 'axios';

import './i18n';

import Routes from './routes';

Axios.defaults.baseURL = '';

const App = () => <Routes />;

export { App };
