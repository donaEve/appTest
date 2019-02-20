import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';

export default class Home extends React.Component {  
    static navigationOptions = {
        header: null
    }
        render(){
            const { movie } = this.props.navigation.state.params;
            return( 
                <ScrollView>     
                    <View style={styles.imgContainer}>
                        <Image 
                            style={styles.imageSmall} 
                            source={{
                            uri: movie.img  
                        }} 
                        />
                    <View style={styles.format}>
                    <Text style={styles.titleStyle}>{movie.title}{"\n\n"}</Text>  
                    <Text style={styles.defaultText}>Título original: {movie.originalTitle}</Text>
                    <Text style={styles.defaultText}>País: {movie.countryOrigin}</Text>
                    <Text style={styles.defaultText}>Indicação: {movie.contentRating}</Text>
                    <Text style={styles.defaultText}>Duração: {movie.duration} min</Text>
                    <Text style={styles.defaultText}>Rating: {movie.rating}{"\n\n"}</Text>
                    <Text style={styles.descrip}>Sinopse:</Text>
                    <Text style={styles.defaultText}>{movie.synopsis}</Text>
                    <Text style={styles.defaultText}>Ano: {movie.year}{"\n\n"}</Text>
                    <Text style={styles.descrip}>Elenco:</Text>
                    <Text style={styles.defaultText}>{movie.cast}</Text>
                    <Text style={styles.descrip}>Direção:</Text>
                    <Text style={styles.defaultText}>{movie.director}{"\n\n"}</Text>
                    <Text style={styles.footer}>Distribuidora - {movie.distributor}</Text>
                    </View>
                    </View>
                </ScrollView>
            );
        }
    }

const styles = StyleSheet.create({
    imgContainer:{
        backgroundColor: '#2c3e50',       
    },
    image:{
        aspectRatio: 1,           
        },
    imageSmall:{
        aspectRatio: 0.5,  
    },
    format:{
        margin: 10
    },
    titleStyle:{
        fontSize: 25,
        textAlign: 'center',
        color: '#1e8bc3',
    },
    defaultText:{
        fontSize: 15,
        color: '#5c97bf'
    },
    descrip:{
        fontSize: 20,
        color: '#191970',
    },
    footer:{
        textAlign: 'center'
    }   
    })