import React, { Component } from 'react';

import { View, Text } from 'react-native';

import { Container } from './styles';

export default class Details extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('repository').name,
  });

  render() {
    const { navigation } = this.props;

    return (
      <View>
        <Text>{navigation.getParam('repository').name}</Text>
      </View>
    );
  }
}
