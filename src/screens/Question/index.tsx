import React, {useState, useEffect} from 'react';
import {getQuestion} from '../../utils/notesHelper';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  Scroll,
  QuestionText,
  Note,
  StringName,
  Button,
  ButtonText,
  InputAnswer,
  LogoContainer,
  Logo,
} from './styles';
import {RootStackParamList} from './types';
import {Alert} from 'react-native';
import logo from '../../assets/logo.jpg';

const Question = () => {
  const {navigate, addListener} =
    useNavigation<StackNavigationProp<RootStackParamList>>();

  const [note, setNote] = useState('');
  const [stringName, setStringName] = useState('');
  const [answer, setAnswer] = useState('');
  const [userResponse, setUserResponse] = useState('');

  const setNewQuestion = () => {
    const question = getQuestion();
    setNote(question.guitarPosition.note);
    setStringName(question.guitarString);
    setAnswer(question.guitarPosition.position);
    setUserResponse('');
  };

  useEffect(() => {
    const unsubscribe = addListener('focus', () => {
      setNewQuestion();
    });

    return unsubscribe;
  }, [addListener]);

  const goToAnswer = () => {
    if (!userResponse) {
      return Alert.alert('Ops!', 'Preencha sua resposta!');
    }
    return navigate('Answer', {answer, userResponse});
  };

  return (
    <Container>
      <Scroll>
        <LogoContainer>
          <Logo source={logo} />
        </LogoContainer>
        <QuestionText>Informe em qual casa fica a nota</QuestionText>
        <Note>{note}</Note>
        <QuestionText>na corda</QuestionText>
        <StringName>{stringName}</StringName>

        <InputAnswer
          keyboardType="numeric"
          value={userResponse}
          onChangeText={setUserResponse}
          maxLength={2}
        />
        <Button onPress={goToAnswer}>
          <ButtonText>RESPONDER</ButtonText>
        </Button>
      </Scroll>
    </Container>
  );
};

export default Question;
