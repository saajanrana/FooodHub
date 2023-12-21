
import Navigation from './components/Navigation';
import {SafeAreaView} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import store from './context/Store';

const App = () => {
  return (
 
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store} >
      <Navigation />
      </Provider>
    </SafeAreaView>
  
  );
};
export default App;
