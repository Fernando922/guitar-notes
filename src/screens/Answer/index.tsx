import React, {useEffect, useState} from 'react';
import {useRoute, RouteProp} from '@react-navigation/native';

import {useNavigation} from '@react-navigation/native';

import {
  Container,
  Title,
  CorrectAnswer,
  Response,
  LogoContainer,
  Logo,
  Button,
  ButtonText,
} from './styles';
import {Params} from './types';

import logo from '../../assets/images/logo.jpg';

const Answer = () => {
  const {params} = useRoute<RouteProp<Params, 'Answer'>>();
  const [message, setMessage] = useState('');
  const {goBack} = useNavigation();

  const handleTryAgain = () => {
    goBack();
  };

  useEffect(() => {
    if (params) {
      if (params.answer === params.userResponse) {
        setMessage('Parabéns! Você acertou!');
      } else {
        setMessage('Ops! Você errou!');
      }
    }
  }, [params]);

  return (
    <Container>
      <LogoContainer>
        <Logo source={logo} />
      </LogoContainer>
      <Title>A Resposta é:</Title>
      <CorrectAnswer>{params.answer}</CorrectAnswer>

      <Response>{message}</Response>
      <Button onPress={handleTryAgain}>
        <ButtonText>Tentar novamente</ButtonText>
      </Button>
    </Container>
  );
};

export default Answer;
