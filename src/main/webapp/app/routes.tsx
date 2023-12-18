import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import LoginRedirect from 'app/modules/login/login-redirect';
import Logout from 'app/modules/login/logout';
import Home from 'app/modules/home/home';
import PrivateRoute from 'app/shared/auth/private-route';
import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';
import PageNotFound from 'app/shared/error/page-not-found';
import { AUTHORITIES } from 'app/config/constants';

const loading = <div>loading ...</div>;

const Admin = Loadable({
  loader: () => import(/* webpackChunkName: "administration" */ 'app/modules/administration'),
  loading: () => loading,
});

const LaboratoryRoutes = React.lazy(() => import('@laboratory/entities-routes').catch(() => import('app/shared/error/error-loading')));

const AppRoutes = () => {
  return (
    <div className="view-routes">
      <ErrorBoundaryRoutes>
        <Route index element={<Home />} />
        <Route path="logout" element={<Logout />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="oauth2/authorization/oidc" element={<LoginRedirect />} />
        <Route
          path="admin/*"
          element={
            <PrivateRoute hasAnyAuthorities={[AUTHORITIES.ADMIN]}>
              <Admin />
            </PrivateRoute>
          }
        />
        <Route
          path="laboratory/*"
          element={
            <Suspense fallback={loading}>
              <PrivateRoute hasAnyAuthorities={[AUTHORITIES.MEDICAL_USER, AUTHORITIES.LAB_USER, AUTHORITIES.ADMIN]}>
                <LaboratoryRoutes />
              </PrivateRoute>
            </Suspense>
          }
        />
      </ErrorBoundaryRoutes>
    </div>
  );
};

export default AppRoutes;
