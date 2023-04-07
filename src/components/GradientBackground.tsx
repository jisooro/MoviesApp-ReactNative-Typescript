import { View, Text, StyleSheet, Animated } from 'react-native'
import React, { useContext, useEffect } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { GradientContext } from '../context/GradientContext'
import useFade from '../hooks/useFade'

interface Props {
    children: JSX.Element | JSX.Element[]
}

const GradientBackground = ( { children }: Props ) => {

    const { colors, prevColors, setMainPrevColors } = useContext( GradientContext );

    const { fadeIn, fadeOut, opacity } = useFade( )

    useEffect(() => {
        fadeIn( () => {
            setMainPrevColors( colors );
            fadeOut(0);
        })
    }, [ colors ])
    
    return (
        <View style = {{ flex: 1 }}>
            <LinearGradient 
                colors = {[ prevColors.primary, prevColors.secondary, '#fff' ]}
                style = {{ ...StyleSheet.absoluteFillObject }}
                start = {{ x: 0.1, y: 0.1 }}
                end = {{ x: 0.4, y: 0.7  }}
            />

            <Animated.View
                style = {{ ...StyleSheet.absoluteFillObject,
                opacity }}

            >
                <LinearGradient
                    colors={[colors.primary, colors.secondary, '#fff']}
                    style={{ ...StyleSheet.absoluteFillObject }}
                    start={{ x: 0.1, y: 0.1 }}
                    end={{ x: 0.4, y: 0.7 }}
                />
            </Animated.View>
            { children }
        </View>
    )
}

export default GradientBackground