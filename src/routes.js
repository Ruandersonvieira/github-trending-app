import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Trending from './pages/Trending';

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

export default createAppContainer(mainNavigation);
