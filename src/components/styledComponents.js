import {Dimensions, Platform} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

import styled from 'styled-components/native';
import commonStyles from '~/assets/styles/commonStyles';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export const FakeStatusBar = styled.SafeAreaView`
  flex: 0;
  background-color: ${props =>
    props.color ? props.color : commonStyles.colors.white};
`;

export const ImageBgWrap = styled.ImageBackground.attrs({
  opacity: 0.18,
  resizeMode: 'contain',
  source: commonStyles.imgs.background,
  backgroundColor: commonStyles.colors.lightGrey,
})`
  flex: 1;
  padding: 10px 15px;
`;

export const AppContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${props =>
    props.color ? props.color : commonStyles.colors.transparent};
`;

export const AppBody = styled.View`
  flex: 1;
  padding-top: ${props => (props.hasGayHeader ? '30px' : '10px')};
  background-color: ${props =>
    props.color ? props.color : commonStyles.colors.white};
`;

export const AppBodyOver = styled.View`
  flex: 1;
  margin-top: -40px;
  padding: 50px 15px 0;
  box-shadow: 0px -10px 10px #00000060;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  background-color: ${props =>
    props.color ? props.color : commonStyles.colors.white};
`;

export const InputContainer = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  padding: 0 15px;
  height: 45px;
  margin-bottom: 5px;
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
  color: ${commonStyles.colors.white};
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
  color: ${commonStyles.colors.black};
  font-size: 17px;
  font-weight: bold;
`;

export const LineSeparator = styled.View`
  height: 2px;
  width: 100%;
  margin-bottom: 5px;
  background-color: ${commonStyles.colors.red};
`;

export const TotalOverLine = styled.View`
  height: 3px;
  width: 40%;
  align-self: flex-end;
  background-color: ${commonStyles.colors.red};
`;

export const styles = {
  emptyView: {
    paddingVertical: 5,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: commonStyles.colors.white,
  },
  loadingView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: commonStyles.colors.white,
  },
  inlineItems: {
    width: WIDTH,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  straightHeader: {
    width: WIDTH,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: commonStyles.colors.gold,
  },
  gayHeader: {
    width: WIDTH,
    marginBottom: -20,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: commonStyles.colors.gold,
  },
  overlapingView: {
    flex: 1,
    marginTop: -40,
    paddingVertical: 10,
    paddingHorizontal: 15,
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
  },
  headerLOGO: {
    width: 30,
    height: 30,
  },
  headerBanner: {
    margin: 0,
    width: WIDTH,
    minHeight: HEIGHT * 0.15,
  },
  headerTitle: {
    margin: 5,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: commonStyles.colors.black,
  },

  profilePhoto: {
    width: 75,
    height: 75,
    marginRight: 15,
    borderRadius: 999,
  },
  profileName: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'left',
    color: commonStyles.colors.breadcrumb,
  },
  profileInfoWrap: {
    padding: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'flex-start',
  },
  //////////////

  xIcon: {
    width: 25,
    height: 25,
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
};
