import {Dimensions, StyleSheet} from 'react-native';
import commonStyles from '~/assets/styles/commonStyles';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  categoryBox: {
    padding: 25,
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 15,
    width: WIDTH / 2 - 30,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: commonStyles.colors.white,

    shadowColor: commonStyles.colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 15,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: commonStyles.colors.black,
  },
  categorySubTitle: {
    fontSize: 16,
    marginTop: 5,
    color: commonStyles.colors.neutral,
  },

  listItemWrapper: {
    width: WIDTH,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-around',
  },
  listItemPhoto: {
    borderRadius: 5,
    width: WIDTH * 0.2,
    height: WIDTH * 0.2,
  },
  listItemContent: {
    width: WIDTH * 0.7,
    flexDirection: 'column',
    alignItems: 'flex-end',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  listItemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
    color: commonStyles.colors.black,
  },
  listItemDescrip: {
    ...commonStyles.text,
    marginBottom: 15,
    textAlign: 'right',
  },
  listItemPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'right',
    color: commonStyles.colors.success,
  },

  singleItemWrapper: {
    width: '100%',
    marginBottom: 25,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  singleItemDescrip: {
    marginTop: 5,
    textAlign: 'center',
    ...commonStyles.text,
  },
  singleItemPrice: {
    fontSize: 32,
    fontWeight: 'bold',
    color: commonStyles.colors.breadcrumb,
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
});
