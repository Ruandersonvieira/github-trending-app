/* eslint-disable react/no-unused-state */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { BubblesLoader, TextLoader } from 'react-native-indicator';
import AsyncStorage from '@react-native-community/async-storage';

import { Alert } from 'react-native';

import { StarButton, StarButtonText } from '../../components/button';

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
} from './styles';

class Trending extends Component {
  addToFavorite = async repository => {
    let favoriteList = JSON.parse(await AsyncStorage.getItem('favoriteList'));

    if (!favoriteList) {
      favoriteList = [];
    }

    const isfavorite = await this.checkFavorite(repository);

    if (!isfavorite) {
      Alert.alert('Adicionado com Sucesso!');
      favoriteList.push(repository);
      await AsyncStorage.setItem('favoriteList', JSON.stringify(favoriteList));
    }
  };

  checkFavorite = async repository => {
    const favoriteList = JSON.parse(await AsyncStorage.getItem('favoriteList'));

    if (!favoriteList) {
      return false;
    }

    const isfavorited = favoriteList.filter(item => {
      return item.node.id === repository.node.id;
    });

    if (isfavorited.length === 0) {
      return false;
    }
    return true;
  };

  handleNavigate = repository => {
    const { navigate } = this.props.navigation;

    navigate('Detalhes', { repository });
  };

  renderRepositoriesList = () => (
    <List>
      {this.props.repositories.search.edges.map(repository => (
        <ContainerCard key={repository.node.id}>
          <Card>
            <Row>
              <Icon name="book" size={16} color="#586069" />
              <Title
                onPress={() => {
                  this.handleNavigate(repository.node);
                }}
              >
                {repository.node.name}
              </Title>
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
            <StarButton
              onPress={() => {
                this.addToFavorite(repository);
              }}
            >
              <Row>
                <Icon name="star" size={18} color="#24292e" />
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
