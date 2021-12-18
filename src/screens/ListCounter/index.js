import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {FlatList, Platform} from 'react-native';
import {Container, ButtonAdd, Empty} from './styles';
import {CardCounter, Header, StatusBarIos} from '../../components';
import Plus from '../../assets/icons/plus.svg';
import {shadows} from '../../theme/colors';

export default function ListCounter() {
  const {counters} = useSelector(state => state.CounterReducer);
  const navigation = useNavigation();

  return (
    <Container>
      {Platform.OS === 'ios' ? <StatusBarIos /> : null}
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
