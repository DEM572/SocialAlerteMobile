import { createStackNavigator } from "@react-navigation/stack";
import SignUpScreen from "./SignUpScreen";
import SignInScreen from "./SignInScreen";
import SplashScreen from "./SplashScreen";

import React from 'react';


import { NavigationContainer } from "@react-navigation/native";

const RootStack = createStackNavigator();

const RootStackScreen = () => (
    <NavigationContainer>
        <RootStack.Navigator>
            <RootStack.Screen  name='Social Alerte' component={SplashScreen} />
            <RootStack.Screen  name='Connexion' component={SignInScreen} />
            <RootStack.Screen  name='Inscription' component={SignUpScreen} />
        </RootStack.Navigator>
    </NavigationContainer>
)



export default RootStackScreen;