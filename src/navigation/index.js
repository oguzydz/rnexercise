import React from 'react';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createNativeStackNavigator();

const AppContainer = ({ auth }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {auth ? (
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          <>
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = state => ({
  auth: state.user.auth,
});

export default connect(mapStateToProps)(AppContainer);
