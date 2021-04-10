import {Dimensions, Platform} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

import styled from 'styled-components/native';

import commonStyles from '~/assets/styles/commonStyles';

export const AppContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${props =>
    props.color ? props.color : commonStyles.colors.white};
`;

export const ImageBgWrap = styled.ImageBackground.attrs({
  source: commonStyles.imgs.background,
  resizeMode: 'contain',
  opacity: 0.18,
  backgroundColor: commonStyles.colors.lightGrey,
})`
  flex: 1;
  padding: 10px 15px;
`;

export const AppWrap = styled.View`
  flex: 1;
  background-color: ${commonStyles.colors.white};
`;

export const AppBody = styled.View`
  flex: 1;
  padding: 10px 15px;
`;

export const InputContainer = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  padding: 0 15px;
  height: 45px;
  margin-bottom: 10px;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  background: transparent;

  flex-direction: row;
  align-items: center;
`;

export const InputText = styled.TextInput.attrs({
  placeholderTextColor: '#646464',
})`
  flex: 1;
  color: #232323;
  font-size: 14px;
  font-weight: bold;
`;

export const ButtonContainer = styled(RectButton)`
  height: 45px;
  padding: 0 5px;
  margin-bottom: 10px;
  border-radius: 4px;

  align-items: center;
  justify-content: center;
  background-color: ${props =>
    props.color ? props.color : commonStyles.colors.blue};
`;
export const ButtonText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;

export const ArrowButtonContainer = styled(RectButton)`
  height: 45px;
  padding: 0 15px;
  margin-bottom: 10px;
  background-color: rgba(0, 0, 0, 0.03);
  border-radius: 4px;

  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: space-between;
`;
export const ArrowButtonText = styled.Text`
  color: #000;
  font-size: 17px;
  font-weight: bold;
`;

export const LineSeparator = styled.View`
  height: 3px;
  width: 100%;
  margin-bottom: 5px;
  background-color: #ff0000;
`;

export const TotalOverLine = styled.View`
  height: 3px;
  width: 40%;
  align-self: flex-end;
  background-color: #ff0000;
`;

export const styles = {
  headerContainer: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 100,
    borderBottomEndRadius: 100,
    backgroundColor: commonStyles.colors.gold,
  },
  headerContainerStraight: {
    width: Dimensions.get('screen').width,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: commonStyles.colors.gold,
  },
  headerLOGO: {
    width: 45,
    height: 45,
    marginBottom: 5,
  },
  headerFOTO: {
    borderRadius: 999,
    marginBottom: 5,
    width: Dimensions.get('window').width * 0.2,
    height: Dimensions.get('window').width * 0.2,
  },
  headerTitle: {
    margin: 5,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: commonStyles.colors.black,
  },
  headerBanner: {
    margin: 0,
    width: Dimensions.get('window').width,
    minHeight: Dimensions.get('window').height * 0.15,
  },
  headerButton: {
    margin: 10,
    padding: 5,
    height: 30,
    width: 'auto',
    flexDirection: 'row',
  },
  backText: {
    marginLeft: 5,
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  bodyContainer: {
    paddingVertical: 25,
    paddingHorizontal: 10,
  },

  //////////////

  inputTextWrapper: {
    marginBottom: 10,
  },

  xIcon: {
    width: 25,
    height: 25,
  },

  boldText: {
    ...commonStyles.text,
    fontSize: 18,
    fontWeight: 'bold',
  },

  silentText: {
    ...commonStyles.text,
    fontWeight: 'bold',
    color: commonStyles.colors.neutral,
  },
  inlineItems: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-around',
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
};
