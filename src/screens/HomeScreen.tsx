import { View, ActivityIndicator, Dimensions, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import React, { useContext, useEffect } from 'react'
import useMovies from '../hooks/useMovies'
import MovieCard from '../components/MovieCard';
import Carousel from 'react-native-snap-carousel';
import MoviesFlatList from '../components/MoviesFlatList';
import GradientBackground from '../components/GradientBackground';
import getColors from '../helpers/getColors';
import { GradientContext } from '../context/GradientContext';

const { width: windowWidth } = Dimensions.get('window');

const HomeScreen = () => {

    const { nowPlaying, popular, topRated, upComing, isLoading } = useMovies();

    const { top } = useSafeAreaInsets();

    const { setMainColors } = useContext( GradientContext );

    const getMovieColors = async ( index: number ) => {
        const movie = nowPlaying[index];
        const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

        const [ primary = 'blue', secondary = 'purple' ] = await getColors(uri)
        setMainColors({ primary, secondary })
    
    }

    useEffect(() => {
        if( nowPlaying.length > 0) {
            getMovieColors(0)
        }
    }, [ nowPlaying ])
    

    if ( isLoading ) {
        return (
            <View style = {{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <ActivityIndicator color = 'purple' size = { 100 } />
            </View>
        )
    }

    return (
        <GradientBackground>
            <ScrollView>
                <View style = {{ marginTop: top + 20 }}>
                    
                    {/* Carousel Item */}
                    <View
                        style = {{ height: 440 }}
                    >
                        <Carousel 
                            data = { nowPlaying }
                            renderItem = { ({ item }: any ) => <MovieCard movie = { item } /> }
                            sliderWidth = { windowWidth }
                            itemWidth = { 300 }
                            inactiveSlideOpacity = { 0.9 }
                            onSnapToItem = { index => getMovieColors( index ) }
                        />
                    </View>

                    {/* Popular Moviews Flat List */}
                    <MoviesFlatList title = 'Popular Movies' movies = { popular }/>
                    <MoviesFlatList title = 'Top Rated' movies = { topRated }/>
                    <MoviesFlatList title = 'Upcoming' movies = { upComing }/>
                </View>
            </ScrollView>
        </GradientBackground>
    )
}

export default HomeScreen