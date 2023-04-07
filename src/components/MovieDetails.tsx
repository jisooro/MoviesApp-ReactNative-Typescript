import { View, Text, FlatList, StyleSheet } from 'react-native'
import currencyFormatter from 'currency-formatter';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react'

import { MovieFull } from '../interfaces/movieInterface'
import { Cast } from '../interfaces/creditsInterface';
import CastCard from './CastCard';

interface Props {
    movieFull: MovieFull;
    cast: Cast[];
}

const MovieDetails = ( { movieFull, cast }: Props ) => {
    return (
        <>
            <View style = {{ marginHorizontal: 20 }}>
                <View style = {{ flexDirection: 'row' }}>
                    <Icon name = 'star-outline' size = { 18 } color = '#000' style = {{ marginRight: 10 }} />
                    <Text style = {{ fontSize: 16 }}>{ movieFull.vote_average }</Text>

                    <Text style = {{ marginLeft: 8, fontSize: 16 }}>
                        { movieFull.genres.map( g => g.name ).join(', ') }
                    </Text>
                </View>
                <Text style = { styles.title }>
                    Story
                </Text>

                <Text style = {{ fontSize: 16, marginTop: 5 }}>
                    { movieFull.overview }
                </Text>

                <Text style = { styles.title }>
                    Budget
                </Text>
                <Text style = {{ fontSize: 18, marginTop: 5, marginBottom: 10 }}>
                    { currencyFormatter.format( movieFull.budget, { code: 'USD' }) }
                </Text>

                {/* Cast */}
                <View style = {{ marginTop: 10, marginBottom: 20 }}>
                    <Text style={ styles.title }>
                        Cast
                    </Text>
                    <FlatList 
                        data = { cast }
                        keyExtractor = { (item) => item.id.toString() }
                        renderItem = { ({ item }) => <CastCard actor = { item } />}
                        horizontal = { true }
                        showsHorizontalScrollIndicator = { false }
                        style = {{ marginTop: 10, marginBottom: 10, height: 70}}
                    />

                </View>

            </View>

        </>
    )
}

export default MovieDetails

const styles = StyleSheet.create({
    title: {
        color: '#000',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
    },
})