import React from 'react';
import {View, FlatList, Dimensions, RefreshControl, Text} from 'react-native';

import PropTypes from 'prop-types';
import {LineSeparator} from '~/components/styledComponents';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles} from './styledComponents';
import EmptyList from '~/components/EmptyList';
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
      ItemSeparatorComponent={LineSeparator}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={<EmptyList icon={emptyIcon} message={emptyMessage} />}
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
