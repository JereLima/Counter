import styled from 'styled-components/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../../theme/colors';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${colors.bg};
`;
export const ContainerInput = styled.View`
  margin: 10px;
  height: 70px;
  background-color: ${colors.white};
  justify-content: center;
  border-radius: 15px;
  padding-left: 15px;
  align-self: center;
  width: 90%;
`;
export const ContainerInputNumber = styled.View`
  margin: 10px;
  height: 70px;
  background-color: ${colors.white};
  justify-content: center;
  border-radius: 15px;
  padding-left: 15px;
  align-self: center;
  width: 90%;
`;
export const Input = styled.TextInput`
  font-size: 22px;
  color: ${colors.font};
`;
export const TitleCounter = styled.Text`
  margin-top: 30px;
  font-size: 40px;
  align-self: center;
  font-weight: bold;
  color: ${colors.font};
`;
export const NumberValue = styled.Text`
  font-size: 60px;
  align-self: center;
  font-weight: bold;
  color: ${colors.font};
`;
export const AreaButtons = styled.View`
  width: 50%;
  position: absolute;
  align-self: center;
  bottom: 50px;
  flex-direction: row;
  justify-content: space-around;
`;
export const ButtonAlterValue = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primary};
  border-radius: 50px;
`;
