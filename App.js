
import Navigation from './components/Navigation';
import {SafeAreaView} from 'react-native';

import { Provider } from 'react-redux';
import store from './context/Store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const App = () => {
  return (
      <Provider store={store} >
     <GestureHandlerRootView style={{flex: 1}}>
              <Navigation />
      </GestureHandlerRootView>
      </Provider>
  );
};
export default App;
