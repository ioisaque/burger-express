import {Dimensions, StyleSheet} from 'react-native';
import commonStyles from '~/assets/styles/commonStyles';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  categoryBox: {
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
  categoryPhoto: {
    width: WIDTH / 2 - 30,
    height: WIDTH / 2 - 30,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  categoryIcon: {
    paddingTop: 25,
    paddingBottom: 10,
    paddingHorizontal: 25,
  },
  categoryInfo: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    width: WIDTH / 2 - 30,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: commonStyles.colors.white,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    color: commonStyles.colors.neutral,
  },
  categorySubTitle: {
    fontSize: 16,
    marginTop: 5,
    textAlign: 'center',
    color: commonStyles.colors.neutral,
  },

  listItemWrapper: {
    width: WIDTH,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'flex-start',
  },
  listItemPhoto: {
    borderRadius: 5,
    marginRight: 15,
    width: WIDTH * 0.2,
    height: WIDTH * 0.2,
  },
  listItemContent: {
    height: '100%',
    width: WIDTH * 0.7,
    flexDirection: 'column',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
  },
  listItemTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: commonStyles.colors.black,
  },
  listItemDescrip: {
    fontSize: 14,
    fontWeight: '300',
    color: commonStyles.colors.black,
  },
  listItemPrice: {
    right: 15,
    bottom: 0,
    fontSize: 16,
    fontWeight: 'bold',
    position: 'absolute',
    color: commonStyles.colors.success,
  },

  singleItemWrapper: {
    width: '100%',
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
