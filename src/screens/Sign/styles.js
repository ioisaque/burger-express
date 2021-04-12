import {Dimensions} from 'react-native';
import commonStyles from '~/assets/styles/commonStyles';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default {
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////// LOGIN SCREEN ////////////////////////////////////////////////////////////////////////
  loginContainer: {
    flex: 1,
    paddingVertical: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: commonStyles.colors.white,
  },
  loginLogo: {
    marginBottom: 45,
    width: WIDTH * 0.7,
    height: WIDTH * 0.7,
  },
  fbLoginButton: {
    width: WIDTH * 0.85,
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: commonStyles.colors.facebook,
  },
  googleLoginButton: {
    width: WIDTH * 0.85,
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: commonStyles.colors.blue,
  },
  loginButton: {
    width: WIDTH * 0.85,
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: commonStyles.colors.red,
  },
  loginButtonText: {
    fontSize: 15,
    marginLeft: 15,
    color: commonStyles.colors.white,
  },
  appCopyrights: {
    height: 50,
    maxWidth: HEIGHT * 0.8,
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
};
