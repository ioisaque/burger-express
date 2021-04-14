import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '~/components/styledComponents';
import commonStyles from '~/assets/styles/commonStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function EmptyList({type}) {
  if (type === 'ADICIONAIS')
    return (
      <View
        style={{
          paddingVertical: 5,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          backgroundColor: commonStyles.colors.white,
        }}>
        <Icon
          name="database-settings"
          size={20}
          color={commonStyles.colors.neutral}
        />
        <Text style={commonStyles.text}>Nenhum adicional disponível...</Text>
      </View>
    );
}
