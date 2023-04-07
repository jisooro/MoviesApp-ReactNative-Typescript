import { View, Text, Image, StyleSheet, Dimensions, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Movie } from '../interfaces/movieInterface';
import { RootStackParams } from '../navigation/StackNavigation';
import useMovieDetails from '../hooks/useMovieDetails';
import MovieDetails from '../components/MovieDetails';
import { useNavigation } from '@react-navigation/native';

const screenHeight = Dimensions.get('screen').height;

interface Props extends NativeStackScreenProps<RootStackParams, 'Detail'>{}

const DetailScreen = ( { route, navigation } : Props ) => {

    const movie = route.params as Movie;
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

    const { isLoading, cast, movieFull } = useMovieDetails( movie.id );

    return (
        <ScrollView>
            <View style = { styles.imageContainer }>
                <View style = { styles.imageBorder }>
                    <Image 
                        source = {{ uri }}
                        style = { styles.movieCover }
                    />
                </View>
            </View>
            <View style = { styles.marginContainer }>
                <Text style = { styles.title }>{ movie.title }</Text>
            </View>

            {
                isLoading ?
                <ActivityIndicator size = { 30 } color = 'purple' style = {{ marginTop: 20  }}/>
                : 
                <MovieDetails movieFull = { movieFull! } cast = { cast } />
            }

            <TouchableOpacity style = { styles.backButton }
                onPress = { () => navigation.pop() }
            >
                <Icon 
                    name = 'chevron-back-outline'
                    color = 'white'
                    size = { 50 }
                />
            </TouchableOpacity>
        </ScrollView>
    )
}

export default DetailScreen

const styles = StyleSheet.create({
    imageContainer: {
        elevation: 10,
        width: '100%',
        height: screenHeight * 0.7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 6.27,
        overflow: 'hidden',
        borderBottomStartRadius: 20,
        borderBottomEndRadius: 20,
    },
    imageBorder: {
        flex: 1,
        overflow: 'hidden',
        borderBottomStartRadius: 20,
        borderBottomEndRadius: 20,
    },
    movieCover: {
        flex: 1,
    },

    marginContainer: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    title: {
        color: '#000',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
    },

    backButton: {
        position: 'absolute',
        zIndex: 900,
        elevation: 9,
        top: 10
    }
})