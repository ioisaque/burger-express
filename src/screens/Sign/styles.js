import {Dimensions} from 'react-native';
import commonStyles from '~/assets/styles/commonStyles';

export default {
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////// LOGIN SCREEN ////////////////////////////////////////////////////////////////////////
  loginContainer: {
    flex: 1,
    padding: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: commonStyles.colors.white,
  },
  loginLogo: {
    marginVertical: 45,
    width: Dimensions.get('window').height * 0.11 * (1950 / 662),
    height: Dimensions.get('window').height * 0.11 * (1950 / 662),
  },
  fbLoginButton: {
    width: '100%',
    padding: 10,
    borderRadius: 5,
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
  appCopyrights: {
    height: 50,
    marginTop: 60,
    maxWidth: Dimensions.get('window').height * 0.11 * (1950 / 662),
  },
  appVersion: {
    fontSize: 12,
    paddingVertical: 5,
    paddingHorizontal: 30,
    textAlign: 'center',
    color: commonStyles.colors.danger,
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
};
