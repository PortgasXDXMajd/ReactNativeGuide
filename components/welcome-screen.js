import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import * as Progress from 'react-native-progress';

const st = StyleSheet.create({
    pageContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rowContainer:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        fontSize: 25,
        fontWeight: 800,
        color: "#303030"
    },
});

export class WelcomeScreen extends Component {
    state = {
        x: 5,
        y:7,
        styles:st
    }

    print(){
        console.log('here');
    }

    render() {
        return (
            <View style={this.state.styles?.pageContainer}>
                <View style={this.state.styles?.rowContainer}>
                    <Progress.CircleSnail
                        size={40}
                        indeterminate={true}/>
                    <View style={{width:5}} />
                    <Text style={this.state.styles?.text}>{this.state.x+this.state.y}</Text>
                </View>
                <Button title='print' onPress={()=> this.props.navigation.navigate('HomeScreen')}/>
            </View>
        )
    }
}



export default WelcomeScreen
