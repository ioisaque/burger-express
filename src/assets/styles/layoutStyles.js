import {StyleSheet, Dimensions} from 'react-native';
import commonStyles from './commonStyles';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export const awesomeAlertStyles = {
  progressSize: 'large',
  progressColor: commonStyles.colors.red,
  titleStyle: {
    fontSize: 22,
    fontWeight: '600',
    color: commonStyles.colors.red,
  },
  messageStyle: {
    fontSize: 16,
    ...commonStyles.text,
  },
  contentContainerStyle: {
    width: WIDTH * 0.8,
    minHeight: HEIGHT * 0.2,
  },
  actionContainerStyle: {
    bottom: 0,
    padding: 7,
    width: WIDTH * 0.8,
    position: 'absolute',
    borderTopWidth: 1,
    borderTopColor: commonStyles.colors.lightGrey,
  },
  cancelButtonStyle: {
    width: WIDTH * 0.3,
  },
  cancelButtonTextStyle: {
    textAlign: 'center',
    color: commonStyles.colors.neutral,
  },
  confirmButtonStyle: {
    width: WIDTH * 0.3,
  },
  confirmButtonTextStyle: {
    textAlign: 'center',
  },
};

export default StyleSheet.create({
  ///////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////
  tabBarContainer: {
    height: 65,
    paddingVertical: 5,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    elevation: 5,
    shadowRadius: 3,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowColor: commonStyles.colors.black,
    borderColor: commonStyles.colors.transparent,
    backgroundColor: commonStyles.colors.white,
  },
});
