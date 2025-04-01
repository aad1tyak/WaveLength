import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

//The Main Starter Function
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Text>Welcome To WaveLength: </Text>
        <Text>Sign UP or Sign In</Text>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
