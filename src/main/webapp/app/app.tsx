import 'react-toastify/dist/ReactToastify.css';
import './app.scss';
import 'app/config/dayjs.ts';

import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

import { useAppDispatch, useAppSelector } from 'app/config/store';
import { getSession } from 'app/shared/reducers/authentication';
import { getProfile } from 'app/shared/reducers/application-profile';
import { hasAnyAuthority } from 'app/shared/auth/private-route';
import ErrorBoundary from 'app/shared/error/error-boundary';
import { AUTHORITIES } from 'app/config/constants';
import AppRoutes from 'app/routes';
import MainLayout from 'app/shared/layout/main-layout/layout';

const baseHref = document.querySelector('base').getAttribute('href').replace(/\/$/, '');

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSession());
    dispatch(getProfile());
  }, []);

  const currentLocale = useAppSelector(state => state.locale.currentLocale);
  const isAuthenticated = useAppSelector(state => state.authentication.isAuthenticated);
  const isMedicalUser = useAppSelector(state => hasAnyAuthority(state.authentication.account.authorities, [AUTHORITIES.MEDICAL_USER]));
  const isAdmin = useAppSelector(state => hasAnyAuthority(state.authentication.account.authorities, [AUTHORITIES.ADMIN]));
  const ribbonEnv = useAppSelector(state => state.applicationProfile.ribbonEnv);
  const isInProduction = useAppSelector(state => state.applicationProfile.inProduction);
  const isOpenAPIEnabled = useAppSelector(state => state.applicationProfile.isOpenAPIEnabled);
  const auth = useAppSelector(state => state.authentication);
  console.log('auth', auth);

  const paddingTop = '60px';
  return (
    <BrowserRouter basename={baseHref}>
      <div className="app-container" style={{ paddingTop }}>
        <ToastContainer position={toast.POSITION.TOP_LEFT} className="toastify-container" toastClassName="toastify-toast" />

        <ErrorBoundary>
          <MainLayout isAuthenticated={isAuthenticated} currentLocale={currentLocale}>
            <ErrorBoundary>
              <AppRoutes />
            </ErrorBoundary>
          </MainLayout>
        </ErrorBoundary>
        {/*  <Header*/}
        {/*    isAuthenticated={isAuthenticated}*/}
        {/*    isAdmin={isAdmin}*/}
        {/*    isMedicalUser={isMedicalUser}*/}
        {/*    currentLocale={currentLocale}*/}
        {/*    ribbonEnv={ribbonEnv}*/}
        {/*    isInProduction={isInProduction}*/}
        {/*    isOpenAPIEnabled={isOpenAPIEnabled}*/}
        {/*  />*/}
        {/*</ErrorBoundary>*/}
        {/*<div className="container-fluid view-container" id="app-view-container">*/}
        {/*  <Card className="jh-card">*/}
        {/*    */}
        {/*  </Card>*/}
        {/*  <Footer />*/}
        {/*</div>*/}
      </div>
    </BrowserRouter>
  );
};

export default App;
