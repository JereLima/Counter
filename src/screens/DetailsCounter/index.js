import React, {useRef, useState} from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';
import {
  Button,
  Header,
  ModalConfirmation,
  ModalFeedback,
  StatusBarIos,
} from '../../components';
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
import {colors, shadows} from '../../theme/colors';
import {Alert} from 'react-native';

export default function DetailsCounter() {
  const navigation = useNavigation();
  const route = useRoute();
  const item = route.params?.item;
  const dispatch = useDispatch();
  const valueRef = useRef();

  const [title, setTitle] = useState(item ? item.title : '');
  const [value, setValue] = useState(item ? item.value : '');
  const [modalDelete, setModalDelete] = useState(false);
  const [modalFeedback, setModalFeedback] = useState(false);

  const gereneratorId = moment().format('x');

  const handleCreateCounter = () => {
    if (!title || !value) {
      return Alert.alert('Atenção!', 'Preencha todos os campos!');
    }
    setModalFeedback(true);
    dispatch({
      type: 'createCounter',
      payload: {id: gereneratorId, title: title, value: value},
    });
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

  const handleDeleteCounter = () => {
    dispatch({
      type: 'DELETE_COUNTER',
      payload: {id: item.id},
    });
    setModalDelete(false);
    navigation.goBack();
  };

  return (
    <Container>
      <StatusBarIos />
      <ModalConfirmation
        visible={modalDelete}
        cancel={setModalDelete}
        confirm={() => handleDeleteCounter()}
        text={'Confirma a exclusão \ndesse contador?'}
      />
      <ModalFeedback
        visible={modalFeedback}
        text="Criado com Sucesso!"
        confirm={() => navigation.goBack()}
      />
      <Header goBack={true} title={item?.id ? 'Editar' : 'Criar'} />
      {!item ? (
        <ContainerInput>
          <Input
            onChangeText={titleItem => setTitle(titleItem)}
            placeholder="Título para o contador"
            placeholderTextColor="#AAA"
            returnKeyType="next"
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
            returnKeyType="done"
            onEndEditing={handleCreateCounter}
          />
        </ContainerInputNumber>
      ) : null}
      {!item ? <Button title="Salvar" onPress={handleCreateCounter} /> : null}
      {item ? (
        <AreaButtons>
          <ButtonAlterValue
            style={shadows.primary}
            onPress={() => editCounter('decrease')}>
            <Minus width={40} fill={colors.white} />
          </ButtonAlterValue>
          <ButtonAlterValue
            style={shadows.primary}
            onPress={() => editCounter('increase')}>
            <Plus width={40} fill={colors.white} />
          </ButtonAlterValue>
        </AreaButtons>
      ) : null}
      {item ? (
        <Button
          bgColor={colors.danger}
          titleColor={colors.white}
          title="Apagar contador"
          onPress={() => setModalDelete(true)}
        />
      ) : null}
    </Container>
  );
}
