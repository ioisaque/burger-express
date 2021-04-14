import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {styles} from '~/components/styledComponents';
import commonStyles from '~/assets/styles/commonStyles';

export default function LoadingView() {
  return (
    <View style={styles.loadingView}>
      <ActivityIndicator size="large" color={commonStyles.colors.red} />
    </View>
  );
}
