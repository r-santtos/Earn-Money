import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, CardStyleInterpolators  } from "@react-navigation/stack";

import HomeOptions from "../pages/HomeOptions";
import EntrepreneurialOptions from "../pages/EntrepreneurialOptions";
import InvestorOptions from "../pages/InvestorOptions";
import Actions from "../pages/Actions";

const Stack = createStackNavigator();
function Routes() {
  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor="#20232a" />
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: "horizontal",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      >
        <Stack.Screen 
          name="HomeOptions" 
          component={HomeOptions} 
          options={{
            headerTintColor: '#c6c6c6',
            title: 'Opções',
            headerStyle: {backgroundColor: '#20232a'},
          }}
        />
        <Stack.Screen 
          name="EntrepreneurialOptions" 
          component={EntrepreneurialOptions}
          options={{
            headerTintColor: '#c6c6c6',
            title: 'Empreendedorismo',
            headerStyle: {backgroundColor: '#20232a'},
          }}
        />
        <Stack.Screen
          name="InvestorOptions" 
          component={InvestorOptions}
          options={{
            headerTintColor: '#c6c6c6',
            title: 'Opções de Investimentos',
            headerStyle: {backgroundColor: '#20232a'},
          }}
        />
        <Stack.Screen
          name="Actions" 
          component={Actions}
          options={{
            headerTintColor: '#c6c6c6',
            title: 'Ações',
            headerStyle: {backgroundColor: '#20232a'},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;