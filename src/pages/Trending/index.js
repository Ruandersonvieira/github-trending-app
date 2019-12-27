/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { BubblesLoader, TextLoader } from 'react-native-indicator';

import {
  SafeArea,
  ContainerCenter,
  Row,
  List,
  Card,
  ContainerCard,
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

class Trending extends Component {
  renderRepositoriesList = () => (
    <List>
      {this.props.repositories.search.edges.map(repository => (
        <ContainerCard key={repository.node.id}>
          <Card>
            <Row>
              <Icon name="book" size={16} color="#586069" />
              <Title>{repository.node.name}</Title>
            </Row>
            <Row>
              <Description>{repository.node.description}</Description>
            </Row>
            <ContainerRepositoryInfo>
              {repository.node.primaryLanguage ? (
                <RowLanguage>
                  <LanguageColor
                    circleColor={repository.node.primaryLanguage.color}
                  />
                  <LanguageText>
                    {repository.node.primaryLanguage.name}
                  </LanguageText>
                </RowLanguage>
              ) : null}
              <RowFork>
                <Icon name="code-fork" size={16} color="#586069" />
                <ForkText>{repository.node.forks.totalCount}</ForkText>
              </RowFork>
              <RowStar>
                <Icon name="star" size={16} color="#586069" />
                <StarText>{repository.node.stargazers.totalCount}</StarText>
              </RowStar>
            </ContainerRepositoryInfo>

            <StarButton>
              <Row>
                <Icon name="star-o" size={18} color="#24292e" />
                <StarButtonText>Start</StarButtonText>
              </Row>
            </StarButton>
          </Card>
        </ContainerCard>
      ))}
    </List>
  );

  render() {
    const { repositories } = this.props;

    return (
      <SafeArea>
        {repositories.loading ? (
          <ContainerCenter>
            <BubblesLoader color="#586069" />
            <TextLoader text="Carregando" />
          </ContainerCenter>
        ) : (
          this.renderRepositoriesList()
        )}
      </SafeArea>
    );
  }
}

const RepositoryQuery = gql`
  {
    search(query: "is:public", type: REPOSITORY, first: 10) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            id
            name
            description
            resourcePath
            hasIssuesEnabled
            openGraphImageUrl
            owner {
              login
            }
            stargazers {
              totalCount
            }
            primaryLanguage {
              color
              name
            }
            forks {
              totalCount
            }
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

export default graphql(RepositoryQuery, { name: 'repositories' })(Trending);
