import React from 'react';
import LoadingView from '~/components/LoadingView';

import {useAuth} from '~/contexts/auth';
import AppRoutes from './app';
import AuthRoutes from './auth';

const Routes = () => {
  const {signed, loading} = useAuth();
  return loading ? <LoadingView /> : signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
