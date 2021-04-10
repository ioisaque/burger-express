import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import commonStyles from '~/assets/styles/commonStyles';

import {useAuth} from '~/contexts/auth';
import AppRoutes from './app';
import AuthRoutes from './auth';

const Routes = () => {
  const {signed, loading} = useAuth();

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: commonStyles.colors.white,
        }}>
        <ActivityIndicator size="large" color={commonStyles.colors.red} />
      </View>
    );
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
