// ROTAS

import { createAppContainer, createStackNavigator } from 'react-navigation';
import FirstPage from './src/pages/FirstPage';
import Home from './src/pages/Home';
import Info from './src/pages/Info';

const AppNavigator = createStackNavigator({
  'FirstPage':{
    screen: FirstPage
  },
  'Home':{
    screen: Home
  },
  'Info':{
    screen: Info,
    navigationOptions: ({ navigation }) => {
      const { movie } = navigation.state.params;
      return{
        title: movie.title
      }
    }
  }, 
}, {
    defaultNavigationOptions: {
      title: 'Movies',
      headerStyle:{
        backgroundColor: '#000',
        
      },
      headerTitleStyle: {
        color: 'white',
        fontSize: 30,
        justifyContent: 'space-between',
        textAlign: 'center',
      }
    }
  });
const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;