import styled from 'styled-components/native';
import {colors} from '../../theme/colors';

export const Container = styled.View`
  width: 100%;
  height: 80px;
  flex-direction: row;
  align-self: center;
  align-items: center;
  background-color: ${colors.primary};
`;
export const BackButton = styled.TouchableOpacity`
  margin-left: 15px;
`;
export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${colors.white};
  position: absolute;
  right: 5%;
`;
