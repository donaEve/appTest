//Imagens

import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';

const Poster = ({ movie, onNavigate }) => (
    <TouchableOpacity
        onPress={onNavigate}
        style={styles.container}>
        <View style={styles.card}>
            <Image 
                source={{
                    uri: movie.img
                }}
                
                aspectRatio={0.5}
                resizeMode='cover'
                style={styles.image}               
            />        
            <View style={styles.cardTitle}>
                <Text style={styles.cardTitleStyle}>{movie.title}</Text>
            </View>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 5,
        backgroundColor: 'black',
        height: Dimensions.get('window').width        
    },
    card:{
        flex: 1,
        borderWidth: 1,
    },
    cardTitle:{
        flex: 1,
        backgroundColor: 'black',
        height: 50,
        position: 'absolute',
        bottom: 0,
        opacity: 0.6,
        width: '100%'
    },
    cardTitleStyle:{
        color: 'white',
        fontSize: 15,
        textAlign: 'center'
    }
});

export default Poster;