import React from 'react';
import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { BaseLayout } from '@components/layouts/BaseLayout';

import {
  AccountDetailPage,
  AccountsPage,
  CardDetailPage,
  WelcomePage,
} from '@pages';

const Pages = (): JSX.Element => (
  <BrowserRouter basename="/greyson-bank-react">
    <BaseLayout>
      <Routes>
        <Route index element={<WelcomePage />} />
        <Route path="/accounts" element={<AccountsPage />} />
        <Route path="/accounts/id" element={<AccountDetailPage />} />
        <Route path="/accounts/id/card" element={<CardDetailPage />} />
      </Routes>
    </BaseLayout>
  </BrowserRouter>
);

export default Pages;
