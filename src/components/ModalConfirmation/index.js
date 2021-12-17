import React from 'react';
import Button from '../Button';
import {colors} from '../../theme/colors';
import {Container, Bg, Content, Text, AreaIcon, AreaButtons} from './styles';
import Warning from '../../assets/icons/warning.svg';

export default function ModalConfirmation({
  visible,
  text,
  Title,
  confirm,
  cancel,
}) {
  return (
    <Container transparent animationType="slide" visible={visible}>
      <Bg>
        <Content>
          <AreaIcon>
            <Warning height={80} width={80} fill={colors.secondary} />
          </AreaIcon>
          <Text>{text}</Text>
          <AreaButtons>
            <Button
              onPress={confirm}
              title="Confirmar"
              bgColor={colors.danger}
            />
            <Button
              onPress={cancel}
              title="Cancelar"
              titleColor={colors.font}
              bgColor={colors.white}
            />
          </AreaButtons>
        </Content>
      </Bg>
    </Container>
  );
}
