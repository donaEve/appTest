//TELA DE CARTAZ

import React from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableOpacity, Text } from 'react-native';
import Poster from '../components/Poster';
import movies from '../../movies.json';

const Home = props => (

            <View>
            <FlatList 
                data={movies}
                renderItem={({ item}) => (
                    <Poster 
                    movie={item}
                    onNavigate={() => props.navigation.navigate('Info', { movie: item })} 
                    />
                    
                )}
                keyExtractor={item => item.id}
                numColumns={2}
                    
                />
             
        </View>
        );

const styles = StyleSheet.create({


});
export default Home;