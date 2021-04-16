import {Dimensions, StyleSheet} from 'react-native';
import commonStyles from '~/assets/styles/commonStyles';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  itemFilaWrapper: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'flex-start',
  },
  itemFilaIcon: {
    marginRight: 30,
  },
  itemFilaTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: commonStyles.colors.neutral,
  },
  itemFilaSubTitle: {
    fontSize: 15,
    fontWeight: '300',
    color: commonStyles.colors.neutral,
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  orderItemWrapper: {
    width: WIDTH,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'flex-start',
  },
  orderItemPhoto: {
    borderRadius: 5,
    marginRight: 15,
    width: WIDTH * 0.2,
    height: WIDTH * 0.2,
  },
  orderItemContent: {
    height: '100%',
    width: WIDTH * 0.7,
    flexDirection: 'column',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
  },
  orderItemTitle: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    color: commonStyles.colors.black,
  },
  orderItemDescrip: {
    fontSize: 14,
    fontWeight: '300',
    color: commonStyles.colors.black,
  },
  orderItemPrice: {
    right: 15,
    bottom: 0,
    fontSize: 16,
    fontWeight: 'bold',
    position: 'absolute',
    color: commonStyles.colors.success,
  },
  orderObservations: {
    padding: 15,
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'justify',
    color: commonStyles.colors.breadcrumb,
  },
  orderDateTime: {
    margin: 5,
    fontSize: 16,
    fontWeight: '500',
    color: commonStyles.colors.neutral,
  },
  orderMenuLink: {
    margin: 5,
    fontSize: 16,
    fontWeight: '500',
    color: commonStyles.colors.red,
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  itemWrapper: {
    marginBottom: 10,
  },
  itemHeader: {
    width: '100%',
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: commonStyles.colors.black,
  },
  itemDescrip: {
    marginBottom: 5,
    ...commonStyles.text,
  },
  itemPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: commonStyles.colors.success,
  },

  totalWrapper: {
    marginVertical: 20,
  },
  totalHeader: {
    marginHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  totalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 5,
    color: commonStyles.colors.black,
  },
  totalPrice: {
    fontSize: 23,
    fontWeight: 'bold',
    color: commonStyles.colors.success,
  },
  payStamp: {
    width: 85,
    height: 50,
    marginLeft: 5,
    marginRight: 35,
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
});
