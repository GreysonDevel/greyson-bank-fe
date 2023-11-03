import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { Provider } from 'react-redux';

import { App } from './';
import { theme } from '@utils';
import { store } from './store';

// Import our custom CSS
import './scss/styles.scss';

// TODO: Přidat test zda-li root existuje v index.html
const root = createRoot(document.getElementById('root')!);

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
);
