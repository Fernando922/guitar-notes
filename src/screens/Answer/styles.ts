import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #fff;
  justify-content: center;
`;

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

export const Title = styled.Text`
  font-size: 24px;
`;
export const CorrectAnswer = styled.Text`
  font-size: 32px;
  margin: 16px;
  font-weight: bold;
`;
export const Response = styled.Text`
  font-size: 16px;
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
