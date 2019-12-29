import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import { Alert } from 'react-native';

import { StarButton, StarButtonText } from '../../components/Button';
import { SafeAreaHeader, Row } from '../../components/Default';
import {
  TitleText,
  DescriptionText,
  UrlText,
  OwnerRow,
  OwnerTextBold,
  OwnerText,
  IssueRow,
  IssueText,
  LanguageRow,
  ContainerRepositoryInfo,
  LanguageColor,
  LanguageText,
  ForkRow,
  ForkText,
  StarRow,
  StarText,
} from '../../components/Card';

export default class Details extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('repository').node.name,
  });

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

  render() {
    const { navigation } = this.props;
    const repository = navigation.getParam('repository');

    return (
      <SafeAreaHeader>
        <Row>
          <Icon name="book" size={16} color="#586069" />
          <TitleText>{repository.node.name}</TitleText>
        </Row>
        <OwnerRow>
          <OwnerTextBold>Owner:</OwnerTextBold>
          <OwnerText>{repository.node.owner.login}</OwnerText>
        </OwnerRow>
        {repository.node.hasIssuesEnabled ? (
          <IssueRow>
            <Icon name="bookmark" size={16} color="#e61919" />
            <IssueText color="#e61919">Have Open Issue</IssueText>
          </IssueRow>
        ) : (
          <IssueRow>
            <Icon name="bookmark" size={16} color="#228b22" />
            <IssueText color="#228b22">Don't have Open Issue</IssueText>
          </IssueRow>
        )}
        <Row>
          <DescriptionText>{repository.node.description}</DescriptionText>
        </Row>
        <Row>
          <UrlText>https://github.com{repository.node.resourcePath}</UrlText>
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
            this.addToFavorite(repository);
          }}
        >
          <Row>
            <Icon name="star" size={18} color="#24292e" />
            <StarButtonText>Start</StarButtonText>
          </Row>
        </StarButton>
      </SafeAreaHeader>
    );
  }
}
