import React from 'react';
import {Container, ButtonAdd, Empty} from './styles';
import {CardCounter, Header} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {FlatList} from 'react-native';
import Plus from '../../assets/icons/plus.svg';
import {shadows} from '../../theme/colors';

export default function ListCounter() {
  const {counters} = useSelector(state => state.CounterReducer);
  const navigation = useNavigation();

  return (
    <Container>
      <Header title="Meus Contadores" />
      {!counters.length ? <Empty>Nenhum contador no momento...</Empty> : null}
      <FlatList
        data={counters}
        keyExtractor={item => item.id}
        renderItem={({item}) => <CardCounter item={item} />}
      />
      <ButtonAdd
        style={shadows.primary}
        onPress={() => navigation.navigate('Details')}>
        <Plus height={30} fill="white" />
      </ButtonAdd>
    </Container>
  );
}
