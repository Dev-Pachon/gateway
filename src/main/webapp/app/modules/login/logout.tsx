import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'app/config/store';
import { logout } from 'app/shared/reducers/authentication';

export const Logout = () => {
  const logoutUrl = useAppSelector(state => state.authentication.logoutUrl);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(logout());
  }, []);

  useEffect(() => {
    if (logoutUrl) {
      window.location.href = logoutUrl;
      // console.log('route-to-logout');
    }
  }, [logoutUrl]);

  return (
    <div className="p-5">
      <h4>Logged out successfully!</h4>
    </div>
  );
};

export default Logout;
