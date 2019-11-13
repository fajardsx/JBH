import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoadView from '../modules/main/Load';
import LandingView from '../modules/main/Landing';
import HomeView from '../modules/main/Home';
import LoginView from '../modules/auth/Login/Index';
import RegisterView from '../modules/auth/Register';
import MainView from '../modules/main/Main';

const AppNavigator = createStackNavigator(
  {
    Load: {screen: LoadView},
    Landing: {screen: LandingView},
    Home: {screen: HomeView},
    Login: {screen: LoginView},
    Register: {screen: RegisterView},
    Main: {screen: MainView},
  },
  {
    initialRouteName: 'Load',
    headerMode: 'none',
  },
);

export default createAppContainer(AppNavigator);
