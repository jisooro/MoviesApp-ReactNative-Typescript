import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import { Movie } from '../interfaces/movieInterface';

export type RootStackParams = {
    Home: undefined,
    Detail: Movie,
}

const Stack = createNativeStackNavigator<RootStackParams>();

const StackNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions = {{
                headerShown: false,
            }}
        >
            <Stack.Screen name = 'Home' component = { HomeScreen }/>
            <Stack.Screen name = 'Detail' component = { DetailScreen }/>
        </Stack.Navigator>
    )
}

export default StackNavigation