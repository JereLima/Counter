import React, {useRef, useState} from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';
import {Button, Header} from '../../components';
import {
  Container,
  ContainerInput,
  ContainerInputNumber,
  Input,
  TitleCounter,
  NumberValue,
  AreaButtons,
  ButtonAlterValue,
} from './styles';
import {useDispatch} from 'react-redux';
import moment from 'moment';
import Minus from '../../assets/icons/minus.svg';
import Plus from '../../assets/icons/plus.svg';
import { colors } from '../../theme/colors';

export default function DetailsCounter() {
  const navigation = useNavigation();
  const route = useRoute();
  const item = route.params?.item;
  const dispatch = useDispatch();
  const valueRef = useRef();

  const [title, setTitle] = useState(item ? item.title : '');
  const [value, setValue] = useState(item ? item.value : 0);

  const gereneratorId = moment().format('x');

  const handleCreateCounter = () => {
    dispatch({
      type: 'createCounter',
      payload: {id: gereneratorId, title: title, value: value},
    });
    navigation.goBack();
  };

  const editCounter = action => {
    if (action === 'increase') {
      setValue(Number(value) + 1);
      dispatch({
        type: 'EDIT_COUNTER',
        payload: {
          id: item?.id,
          title: title,
          value: value + 1,
        },
      });
    } else {
      setValue(Number(value) - 1);
      dispatch({
        type: 'EDIT_COUNTER',
        payload: {
          id: item?.id,
          title: title,
          value: value - 1,
        },
      });
    } //navigation.goBack();
  };

  return (
    <Container>
      <Header goBack={true} title={item?.id ? 'Editar' : 'Criar'} />
      {!item ? (
        <ContainerInput>
          <Input
            onChangeText={titleItem => setTitle(titleItem)}
            placeholder="Título para o contador"
            placeholderTextColor="#AAA"
            value={title}
            autoFocus={item ? false : true}
            onSubmitEditing={item ? null : () => valueRef.current.focus()}
          />
        </ContainerInput>
      ) : null}
      {item ? <TitleCounter>{title}</TitleCounter> : null}
      {item ? <NumberValue>{value}</NumberValue> : null}
      {!item ? (
        <ContainerInputNumber>
          <Input
            ref={valueRef}
            keyboardType="number-pad"
            onChangeText={number => setValue(number)}
            placeholder="Número inicial"
            placeholderTextColor="#AAA"
            value={String(value)}
          />
        </ContainerInputNumber>
      ) : null}
      {!item ? <Button title={'salvar'} onPress={handleCreateCounter} /> : null}
      {item ? (
        <AreaButtons>
          <ButtonAlterValue onPress={() => editCounter('decrease')}>
            <Minus width={40} fill={colors.white} />
          </ButtonAlterValue>
          <ButtonAlterValue onPress={() => editCounter('increase')}>
            <Plus width={40} fill={colors.white} />
          </ButtonAlterValue>
        </AreaButtons>
      ) : null}
    </Container>
  );
}
