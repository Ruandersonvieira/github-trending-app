import styled from 'styled-components/native';

export const ContainerCard = styled.View`
  flex-direction: column;
  padding-top: 10px;
  padding-bottom: 15px;
`;

export const Card = styled.View`
  flex-direction: column;
  background: #ffffff;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #eee;
  border-color: #d1d5da;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 14px;
  padding-left: 5px;
  color: #0366d6;
`;

export const Description = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 13px;
  line-height: 18px;
  padding-top: 5px;
`;

export const ContainerRepositoryInfo = styled.View`
  flex-direction: row;
  padding-top: 5px;
`;

export const RowLanguage = styled.View`
  flex-direction: row;
  padding-right: 20px;
`;

export const LanguageColor = styled.View`
  width: 18px;
  height: 18px;
  border-radius: 9px;
  background: ${props => props.circleColor || '#fff'};
`;

export const LanguageText = styled.Text`
  padding-left: 5px;
`;

export const RowFork = styled.View`
  flex-direction: row;
  padding-right: 20px;
`;

export const ForkText = styled.Text`
  padding-left: 5px;
`;

export const RowStar = styled.View`
  flex-direction: row;
`;

export const StarText = styled.Text`
  padding-left: 5px;
`;
