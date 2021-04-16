import React from 'react';
import {FlatList, Dimensions, RefreshControl} from 'react-native';

import EmptyList from '~/components/EmptyList';
import commonStyles from '~/assets/styles/commonStyles';
import {LineSeparator} from '~/components/styledComponents';

export default function ItemList({
  Header,
  Separator,
  Footer,

  onRefresh,
  isRefreshing,

  emptyIcon,
  emptyMessage,
  ...props
}) {
  return (
    <FlatList
      {...props}
      style={{flex: 1, marginBottom: 5}}
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
      ListHeaderComponent={Header ? Header : null}
      ListFooterComponent={Footer ? Footer : null}
      ItemSeparatorComponent={Separator ? Separator : LineSeparator}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={<EmptyList icon={emptyIcon} message={emptyMessage} />}
    />
  );
}
