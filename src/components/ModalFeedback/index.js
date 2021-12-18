import React from 'react';
import Button from '../../components/Button';
import {colors} from '../../theme/colors';
import {Container, Bg, Content, Text, AreaIcon, AreaButtons} from './styles';
import Check from '../../assets/icons/check.svg';

export default function ModalFeedback({visible, text, Title, confirm, cancel}) {
  return (
    <Container transparent animationType="slide" visible={visible}>
      <Bg>
        <Content>
          <AreaIcon>
            <Check height={80} width={80} fill={colors.success} />
          </AreaIcon>
          <Text>{text}</Text>
          <AreaButtons>
            <Button onPress={confirm} title="Show!" bgColor={colors.success} />
          </AreaButtons>
        </Content>
      </Bg>
    </Container>
  );
}
