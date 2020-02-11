import {
    Dimensions,
} from 'react-native';
import commonStyles from '~/assets/styles/commonStyles';

export default {
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////// LOGIN SCREEN ////////////////////////////////////////////////////////////////////////
    loginContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: commonStyles.colors.gold,
    },
    loginLogo: {
        width: Dimensions.get('window').height * 0.11 * (1950 / 662),
    },
    fbLoginButton: {
        backgroundColor: commonStyles.colors.facebook,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    loginButtonText: {
        fontSize: 15,
        marginLeft: 20,
        color: commonStyles.colors.white,
    },
    loginResult: {
        fontSize: 15,
        padding: 30,
        textAlign: 'center',
        color: commonStyles.colors.danger
    },
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}