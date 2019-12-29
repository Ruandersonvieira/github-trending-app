import styled from 'styled-components/native';

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  padding-left: 20px;
  padding-right: 20px;
`;
export const SafeAreaHeader = styled.SafeAreaView`
  flex: 1;
  padding-top: 60px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Container = styled.View`
  flex-direction: column;
`;

export const ContainerCenter = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const List = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})``;
