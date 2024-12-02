import React from 'react';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import { BrowserRouter, Routes, Route } from 'react-router';
import { Responses404 } from '@consta/uikit/Responses404';

import { AppRoute } from '../../path';

import MainPage from '../../pages/MainPage/MainPage';
import ServicePage from '../../pages/ServicePage/ServicePage';
import ServiceDetailsPage from '../../pages/ServiceDetailsPage/ServiceDetailsPage';
import MainLayout from '../../layouts/DefaultLayout/DefaultLayout';
import LoginPage from '../../pages/LoginPage/LoginPage';
import UserPage from '../../pages/UserPage/UserPage';


const App = function () {
  return (
    <Theme preset={presetGpnDefault}>

      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.main} element={<MainLayout />}>
            <Route index element={<MainPage />} />
            <Route path={AppRoute.service} element={<ServicePage />} />
            <Route path={AppRoute.serviceDetails} element={<ServiceDetailsPage />} />
            <Route path={AppRoute.login} element={<LoginPage />} />
            <Route path={AppRoute.user} element={<UserPage />} />
          </Route>
          <Route path="*" element={<Responses404 />} />
        </Routes>
      </BrowserRouter>

    </Theme >
  );
}

export default App;
