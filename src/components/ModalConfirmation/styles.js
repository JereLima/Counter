import styled from 'styled-components/native';
import {colors} from '../../theme/colors';
export const Container = styled.Modal`
  flex: 1;
`;
export const Bg = styled.View`
  flex: 1;
  background-color: #2229;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  width: 85%;
  height: 70%;
  border-radius: 15px;
  background-color: ${colors.bg};
`;

export const Text = styled.Text`
  font-size: 22px;
  color: ${colors.font};
  align-self: center;
  text-align: center;
`;

export const AreaIcon = styled.View`
  width: 100%;
  align-items: center;
  margin-bottom: 50px;
  margin-top: 50px;
`;

export const AreaButtons = styled.View``;
