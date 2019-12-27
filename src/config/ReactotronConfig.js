import Reactotron, { asyncStorage } from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure({ host: '192.168.0.100' })
    .useReactNative()
    .use(asyncStorage())
    .connect();

  tron.clear();

  console.tron = tron;
}
