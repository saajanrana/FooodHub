import 'react-native-gesture-handler';

import Navigation from './components/Navigation';
import {SafeAreaView} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Navigation />
    </SafeAreaView>
  );
};
export default App;
