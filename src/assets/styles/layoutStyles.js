import {StyleSheet} from 'react-native';
import commonStyles from './commonStyles';

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
