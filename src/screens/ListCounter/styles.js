import styled from 'styled-components/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../../theme/colors';

export const Container = styled(SafeAreaView)`
  background-color: ${colors.bg};
  flex: 1;
`;
export const Empty = styled.Text`
  padding-top: 40%;
  font-size: 24px;
  color: ${colors.font};
  align-self: center;
`;
export const ButtonAdd = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.secondary};
  border-radius: 100px;
  position: absolute;
  bottom: 80px;
  right: 40px;
`;
