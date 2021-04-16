import React from 'react';
import {View, Text} from 'react-native';
import commonStyles from '~/assets/styles/commonStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function EmptyList({icon, message}) {
  return (
    <View
      style={{
        flex: 1,
        paddingVertical: 5,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: commonStyles.colors.white,
      }}>
      {icon && (
        <Icon
          size={45}
          color={commonStyles.colors.neutral}
          name={icon ? icon : 'database-settings'}
        />
      )}
      <Text style={{marginTop: icon ? 25 : 0, ...commonStyles.text}}>
        {message ? message : 'Nenhum item encontrado...'}
      </Text>
    </View>
  );
}
