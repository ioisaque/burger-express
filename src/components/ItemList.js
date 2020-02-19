import React from 'react';
import {View, FlatList, Dimensions, RefreshControl, Text} from 'react-native';

import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles} from './styledComponents';
import commonStyles from '~/assets/styles/commonStyles';

export default function ItemList({
  data,
  keyExtractor,
  renderItem,
  onRefresh,
  isRefreshing,

  emptyIcon,
  emptyMessage,
  ...rest
}) {
  return (
    <FlatList
      data={data}
      style={{flex: 1}}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      ListEmptyComponent={
        <View style={styles.inlineItems}>
          {emptyIcon && (
            <Icon
              name={emptyIcon}
              size={20}
              color={commonStyles.colors.neutral}
            />
          )}
          {emptyMessage !== 'none' && (
            <Text style={styles.silentText}>
              {emptyMessage && !isRefreshing ? emptyMessage : 'Carregando...'}
            </Text>
          )}
        </View>
      }
      refreshControl={
        <RefreshControl
          onRefresh={onRefresh}
          refreshing={isRefreshing}
          //iOS
          title="Recarregando..."
          tintColor={commonStyles.colors.red}
          titleColor={commonStyles.colors.black}
          //Android
          colors={[commonStyles.colors.red]}
          progressViewOffset={Dimensions.get('screen').height * 0.25}
          progressBackgroundColor={commonStyles.colors.white}
        />
      }
      showsVerticalScrollIndicator={false}
      {...rest}
    />
  );
}

ItemList.propTypes = {
  data: PropTypes.any,
  keyExtractor: PropTypes.any,
  renderItem: PropTypes.any,
  onRefresh: PropTypes.func,
  isRefreshing: PropTypes.bool,

  emptyIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  emptyMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

ItemList.defaultProps = {
  emptyIcon: false,
  emptyMessage: false,
  isRefreshing: false,
};
