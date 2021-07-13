import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import HomeBottomTabNav from "./HomeBottomTabNav";

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeBottomTabNav} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigation;
