import 'react-native-gesture-handler';

import React from 'react';

import { Provider } from 'react-redux';

import {createStackNavigator} from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native';


import LoginStartPage from './screens/LoginStartPage';

import SignupFirstPage from './screens/SignupFirstPage';

import store from "./screens/store/index";

const Stack = createStackNavigator();

const App = () => {
    return (
      <>
      <Provider store={store}>
       <NavigationContainer>
          <Stack.Navigator> 
            <Stack.Screen name="로그인 스타트 페이지" component={LoginStartPage}  />
            <Stack.Screen name="SignupFirstPage" component={SignupFirstPage}  />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      </>
    );
};

export default App;