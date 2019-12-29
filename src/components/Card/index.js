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

export const TitleText = styled.Text`
  font-weight: bold;
  font-size: 14px;
  padding-left: 5px;
  color: #0366d6;
`;

export const OwnerRow = styled.View`
  flex-direction: row;
`;

export const OwnerTextBold = styled.Text`
  font-weight: bold;
  color: #000;
`;

export const OwnerText = styled.Text`
  color: #000;
`;

export const UrlText = styled.Text`
  font-size: 14px;
  color: #0366d6;
`;
export const DescriptionSmallText = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 13px;
  line-height: 18px;
  padding-top: 8px;
`;
export const DescriptionText = styled.Text`
  font-size: 14px;
  line-height: 18px;
  padding-top: 3px;
`;

export const ContainerRepositoryInfo = styled.View`
  flex-direction: row;
  padding-top: 5px;
`;

export const IssueRow = styled.View`
  flex-direction: row;
  padding-top: 4px;
`;

export const IssueText = styled.Text`
  padding-left: 5px;
  color: ${props => props.color || '#fff'};
`;

export const LanguageRow = styled.View`
  flex-direction: row;
  padding-right: 20px;
`;

export const LanguageText = styled.Text`
  padding-left: 5px;
`;

export const LanguageColor = styled.View`
  width: 18px;
  height: 18px;
  border-radius: 9px;
  background: ${props => props.circleColor};
`;

export const ForkRow = styled.View`
  flex-direction: row;
  padding-right: 20px;
`;

export const ForkText = styled.Text`
  padding-left: 5px;
`;

export const StarRow = styled.View`
  flex-direction: row;
`;

export const StarText = styled.Text`
  padding-left: 5px;
`;
