import React from 'react';
import './config/ReactotronConfig';

import { SafeAreaView, ScrollView, View, Text, StatusBar } from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View>
            <Text>OK</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
