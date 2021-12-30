import {TextInput} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #fff;
  padding: 16px;
`;

export const Scroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center',
  },
})``;

export const LogoContainer = styled.View`
  width: 50%;
  height: 200px;
  margin-bottom: 18px;
`;

export const Logo = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 100%;
`;

export const QuestionText = styled.Text`
  font-size: 22px;
  text-align: center;
`;

export const Note = styled.Text`
  font-size: 32px;
  font-weight: bold;
  margin: 16px;
  color: #0976b2;
`;

export const StringName = styled.Text`
  font-size: 32px;
  margin: 16px;
  font-weight: bold;
  color: #0976b2;
`;

export const InputAnswer = styled(TextInput)`
  width: 50%;
  text-align: center;
  font-size: 32px;
  border-bottom-width: 1px;
  border-bottom-color: #000;
`;

export const Button = styled.TouchableOpacity`
  background-color: #0976b2;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-top: 16px;
`;

export const ButtonText = styled.Text`
  margin: 16px;
  color: #fff;
  font-weight: bold;
`;
