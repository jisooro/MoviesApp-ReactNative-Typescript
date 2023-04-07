import { View, Animated, Button } from 'react-native'
import React from 'react'
import useFade from '../hooks/useFade'

const FadeScreen = () => {

    const { opacity, fadeIn, fadeOut } = useFade();

    return (
        <View 
            style = {{ 
                flex: 1, 
                backgroundColor: 'grey', 
                justifyContent: 'center',
                alignItems: 'center'
            }} 
        >
            <Animated.View
                style = {{
                    backgroundColor: '#054F6A',
                    borderColor: 'white',
                    borderWidth: 10,
                    width: 150,
                    height: 150,
                    opacity: opacity,
                    marginBottom: 20,
                }}
            />

            <Button
                title = 'Fade In'
                onPress = { () => fadeIn() }
            />
            <Button
                title = 'Fade Out'
                onPress = { () => fadeOut() }
            />
        </View>
    )
}

export default FadeScreen