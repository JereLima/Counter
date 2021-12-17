import React from 'react';
import {Container, BackButton, Title} from './styles';
import Back from '../../assets/icons/back.svg';
import {useNavigation} from '@react-navigation/native';
import { colors, shadows } from '../../theme/colors';

export default function Header({goBack, title}) {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <Container style={shadows.primary}>
      {goBack ? (
        <BackButton onPress={() => handleGoBack()}>
          <Back height={40} fill={colors.white} />
        </BackButton>
      ) : null}
      <Title>{title}</Title>
    </Container>
  );
}
