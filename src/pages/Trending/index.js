/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  SafeArea,
  Container,
  Card,
  Row,
  Title,
  Description,
  ContainerRepositoryInfo,
  RowLanguage,
  LanguageColor,
  LanguageText,
  RowFork,
  ForkText,
  RowStar,
  StarText,
  StarButton,
  StarButtonText,
} from './styles';

export default class Trending extends Component {
  render() {
    return (
      <SafeArea>
        <Container>
          <Card>
            <Row>
              <Icon name="book" size={16} color="#586069" />
              <Title>hmemcpy / milewski-ctfp-pdf</Title>
            </Row>
            <Row>
              <Description>
                Bartosz Milewski's 'Category Theory for Programmers' unofficial
                PDF and LaTeX source
              </Description>
            </Row>
            <ContainerRepositoryInfo>
              <RowLanguage>
                <LanguageColor circleColor="#f1e05a" />
                <LanguageText>TeX</LanguageText>
              </RowLanguage>
              <RowFork>
                <Icon name="code-fork" size={16} color="#586069" />
                <ForkText>2312312</ForkText>
              </RowFork>
              <RowStar>
                <Icon name="star" size={16} color="#586069" />
                <StarText>44444</StarText>
              </RowStar>
            </ContainerRepositoryInfo>

            <StarButton>
              <Row>
                <Icon name="star-o" size={18} color="#24292e" />
                <StarButtonText>Start</StarButtonText>
              </Row>
            </StarButton>
          </Card>
        </Container>
      </SafeArea>
    );
  }
}
