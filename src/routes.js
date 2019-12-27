import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Trending from './pages/Trending';
import Details from './pages/Details';

Icon.loadFont();

const mainNavigation = createMaterialBottomTabNavigator(
  {
    Trending: {
      screen: Trending,
      navigationOptions: () => ({
        tabBarIcon: ({ focused }) => (
          <Icon name="github" size={20} color={focused ? '#fff' : '#ddd'} />
        ),
      }),
    },
  },
  {
    barStyle: {
      backgroundColor: '#23292d',
    },
  }
);

const Routes = createStackNavigator({
  Home: {
    screen: mainNavigation,
    navigationOptions: {
      headerTransparent: 'true',
    },
  },
  Detalhes: {
    screen: Details,
    navigationOptions: {
      headerTransparent: 'false',
    },
  },
});

export default createAppContainer(Routes);
