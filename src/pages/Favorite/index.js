/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { BubblesLoader, TextLoader } from 'react-native-indicator';
import AsyncStorage from '@react-native-community/async-storage';
import { Alert } from 'react-native';

import { StarButton, StarButtonText } from '../../components/Button';
import { SafeArea, ContainerCenter, Row, List } from '../../components/Default';
import {
  Card,
  ContainerCard,
  TitleText,
  DescriptionSmallText,
  ContainerRepositoryInfo,
  LanguageRow,
  LanguageColor,
  LanguageText,
  ForkRow,
  ForkText,
  StarRow,
  StarText,
} from '../../components/Card';

class Favorite extends Component {
  state = {
    favoriteList: [],
  };

  updateFavoriteProps = async () => {
    const favoriteList = await AsyncStorage.getItem('favoriteList');

    if (favoriteList) {
      this.setState({ favoriteList: JSON.parse(favoriteList) });
    }
  };

  removeFromFavorite = async repository => {
    const favoriteList = JSON.parse(await AsyncStorage.getItem('favoriteList'));

    favoriteList.splice(
      favoriteList.findIndex(
        favorite => favorite.node.id === repository.node.id
      ),
      1
    );

    this.setState({ favoriteList });

    await AsyncStorage.setItem('favoriteList', JSON.stringify(favoriteList));

    Alert.alert('Removed from Favorites!');
  };

  handleNavigate = repository => {
    const { navigate } = this.props.navigation;

    navigate('Detalhes', { repository });
  };

  renderRepositoriesList = favoriteList => (
    <List>
      {favoriteList.map(repository => (
        <ContainerCard key={repository.node.id}>
          <Card>
            <Row>
              <Icon name="book" size={16} color="#586069" />
              <TitleText
                onPress={() => {
                  this.handleNavigate(repository);
                }}
              >
                {repository.node.name}
              </TitleText>
            </Row>
            <Row>
              <DescriptionSmallText>
                {repository.node.description}
              </DescriptionSmallText>
            </Row>
            <ContainerRepositoryInfo>
              {repository.node.primaryLanguage ? (
                <LanguageRow>
                  <LanguageColor
                    circleColor={repository.node.primaryLanguage.color}
                  />
                  <LanguageText>
                    {repository.node.primaryLanguage.name}
                  </LanguageText>
                </LanguageRow>
              ) : null}
              <ForkRow>
                <Icon name="code-fork" size={16} color="#586069" />
                <ForkText>{repository.node.forks.totalCount}</ForkText>
              </ForkRow>
              <StarRow>
                <Icon name="star" size={16} color="#586069" />
                <StarText>{repository.node.stargazers.totalCount}</StarText>
              </StarRow>
            </ContainerRepositoryInfo>
            <StarButton
              onPress={() => {
                this.removeFromFavorite(repository);
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
    this.updateFavoriteProps();

    const { favoriteList } = this.state;

    return <SafeArea>{this.renderRepositoriesList(favoriteList)}</SafeArea>;
  }
}

export default Favorite;
