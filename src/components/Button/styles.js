import styled from 'styled-components/native';
import {colors} from '../../theme/colors';

export const Container = styled.TouchableOpacity`
  width: 90%;
  height: 50px;
  margin-top: 15px;
  background-color: ${props => props.bgColor || colors.secondary};
  justify-content: center;
  align-items: center;
  align-self: center;
  border-radius: 15px;
`;
export const Title = styled.Text`
  font-size: 22px;
  color: ${props => props.titleColor || colors.white};
`;
