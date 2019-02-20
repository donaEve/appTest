// Tela inicio/carregamento

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class firstPage extends React.Component {
    static navigationOptions = {
        header: null
    }
    componentDidMount(){
        setTimeout(() => {
            this.props.navigation.navigate('Home')
        }, 400)
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.texto}>app Test</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#650520',
        flex: 1,
        justifyContent: 'center'
    },
    texto:{
        fontSize: 80
    }
});