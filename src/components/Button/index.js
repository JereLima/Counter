import React from 'react';
import {Container, Title} from './styles';

export default function Button({title, onPress, bgColor, titleColor}) {
  return (
    <Container onPress={onPress} bgColor={bgColor}>
      <Title titleColor={titleColor}>{title}</Title>
    </Container>
  );
}
