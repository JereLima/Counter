import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Container, TitleCard, NumberCounter} from './styles';

export default function CardCounter({item}) {
  const navigation = useNavigation();
  return (
    <Container onPress={() => navigation.navigate('Details', {item: item})}>
      <TitleCard>{item.title}</TitleCard>
      <NumberCounter>{item.value}</NumberCounter>
    </Container>
  );
}
