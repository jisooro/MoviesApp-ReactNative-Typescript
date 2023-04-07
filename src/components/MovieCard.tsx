import { View, Image, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native'
import React from 'react'
import { Movie } from '../interfaces/movieInterface'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../navigation/StackNavigation';

interface Props {
    movie: Movie;
    height?: number;
    width?: number;
}

const MovieCard = ( { movie, height = 420, width = 300 }: Props ) => {

    const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`
    
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

    if ( movie === undefined ) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <ActivityIndicator color='purple' size={100} />
            </View>
        )
    }

    return (
        <TouchableOpacity 
            onPress = { () => navigation.navigate( 'Detail', movie ) }
            activeOpacity = { 0.8 }
            style = {{
                width,
                height,
                marginHorizontal: 8,
                paddingBottom: 20, 
                paddingHorizontal: 10
            }}
        >
            <View style = { styles.imageContainer }>
                <Image 
                    source = {{ uri }}
                    style = { styles.image }
                />
            </View>
        </TouchableOpacity>
    )
}

export default MovieCard; 

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 10,
    },
    imageContainer: {
        borderRadius: 18,
        flex: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 6.27,
        elevation: 10,
    }   
})