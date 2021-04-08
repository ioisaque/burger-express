import {Dimensions} from 'react-native';
import commonStyles from '~/assets/styles/commonStyles';

export default {
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////// LOGIN SCREEN ////////////////////////////////////////////////////////////////////////
  loginContainer: {
    flex: 1,
    padding: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: commonStyles.colors.white,
  },
  loginLogo: {
    width: Dimensions.get('window').height * 0.11 * (1950 / 662),
  },
  fbLoginButton: {
    width: '100%',
    padding: 10,
    borderRadius: 5,
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: commonStyles.colors.facebook,
  },
  googleLoginButton: {
    width: '100%',
    padding: 10,
    borderRadius: 5,
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: commonStyles.colors.blue,
  },
  loginButton: {
    width: '100%',
    padding: 10,
    borderRadius: 5,
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 10,
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
  loginResult: {
    fontSize: 15,
    padding: 30,
    textAlign: 'center',
    color: commonStyles.colors.danger,
  },
  appVersion: {
    fontSize: 15,
    padding: 30,
    textAlign: 'center',
    color: commonStyles.colors.danger,
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
};
