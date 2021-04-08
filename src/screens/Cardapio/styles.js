import {Dimensions} from 'react-native';
import commonStyles from '~/assets/styles/commonStyles';

export default {
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  categoryWrapper: {
    width: '100%',
    marginVertical: 8,
  },
  categoryInlineItems: {
    width: '95%',
    marginBottom: 10,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  categoryTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: commonStyles.colors.black,
  },

  itemWrapper: {
    width: '100%',
    paddingRight: 5,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
  },

  itemFoto: {
    marginBottom: 15,
    alignSelf: 'center',
    width: Dimensions.get('window').width * 0.6,
    height: Dimensions.get('window').width * 0.6,
  },

  itemSideFoto: {
    width: Dimensions.get('window').width * 0.2,
    height: Dimensions.get('window').width * 0.2,
  },
  itemContent: {
    width: Dimensions.get('window').width * 0.7,
    flexDirection: 'column',
    alignItems: 'flex-end',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
    color: commonStyles.colors.black,
  },
  itemDescrip: {
    ...commonStyles.text,
    marginBottom: 15,
    textAlign: 'right',
  },
  itemPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'right',
    color: commonStyles.colors.success,
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
};
