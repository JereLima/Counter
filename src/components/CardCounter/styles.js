import styled from 'styled-components/native';
import {colors} from '../../theme/colors';

export const Container = styled.TouchableOpacity`
  width: 95%;
  height: 100px;
  background-color: ${colors.primary};
  align-self: center;
  border-radius: 10px;
  justify-content: center;
  margin-bottom: 5px;
  margin-top: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
`;
export const TitleCard = styled.Text`
  font-size: 20px;
  width: 60%;
  padding-left: 15px;
  color: ${colors.white};
  margin: 5px;
`;
export const NumberCounter = styled.Text`
  font-size: 30px;
  padding-left: 15px;
  font-weight: bold;
  color: ${colors.white};
  width: 40%;
  text-align: center;
  align-self: center;
`;
