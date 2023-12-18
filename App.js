
import Navigation from './components/Navigation';
import {SafeAreaView} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  return (
 
    <SafeAreaView style={{flex: 1}}>
      <Navigation />
    </SafeAreaView>
  
  );
};
export default App;
