import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

export default class ViewPage extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('repository').node.name,
  });

  render() {
    const { navigation } = this.props;
    const repository = navigation.getParam('repository');

    return (
      <WebView
        source={{ uri: repository.node.url }}
        style={{ marginTop: 60, flex: 1 }}
        // javaScriptEnabled
        // domStorageEnabled
        // useWebKit
        // startInLoadingState
      />
    );
  }
}
