import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Screen/Login';
import Welcome from './Screen/Welcome';
import Profile from './Screen/Profile';

const Stack = createNativeStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen
            name="Login"
            component={Login}
          /> */}
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{
              headerLeft: () => <Text></Text>,
              headerTitle: () => <Text>Welcome</Text>
            }}
          />
          {/* <Stack.Screen
            name="Profile"
            component={Profile}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Logo: {
    width: 50,
    height: 50
  }
});
