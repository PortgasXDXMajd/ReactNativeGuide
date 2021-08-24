import React, { Component } from 'react'
import { View, Text, Button} from 'react-native'

export class AboutScreen extends Component {
    render() {
        return (
            <View>
                <Text>About</Text>                
                <Button title='Go Back' onPress={()=>this.props.navigation.goBack()}/>                
            </View>
        )
    }
}

export default AboutScreen
