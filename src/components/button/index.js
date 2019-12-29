import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const StarButton = styled(RectButton)`
  margin-top: 10px;
  align-self: stretch;
  border-radius: 4px;
  background: #eff3f6;
  justify-content: center;
  align-items: center;
  height: 36px;
`;

export const StarButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #24292e;
  padding-left: 5px;
`;
