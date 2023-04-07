import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Cast } from '../interfaces/creditsInterface'

interface Props {
    actor: Cast;
}

const CastCard = ( { actor }: Props ) => {

    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

    return (
        <View style = { styles.container }>
            {
                actor.profile_path &&
                <Image 
                    source = {{ uri }}
                    style = { styles.actorPhoto }
                />
            }
            <View style = { styles.actorInfo }>
                <Text style = {{ fontWeight: 'bold', color: '#000', fontSize: 18 }}>{ actor.name }</Text>
                <Text style = {{ color: 'gray', fontSize: 16 }}>{ actor.character }</Text>

            </View>
        </View>
    )
}

export default CastCard

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderRadius: 5,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 6.27,
        elevation: 4,
        height: 60,
        marginRight: 25,
        paddingRight: 15,
    },
    actorPhoto: {
        width: 60, 
        height: 60, 
        borderRadius: 5
    },
    actorInfo: {
        marginLeft: 10,
        marginTop: 4,
    }
})