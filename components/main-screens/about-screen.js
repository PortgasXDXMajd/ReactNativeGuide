import React, { Component } from 'react'
import { View, Text, Button} from 'react-native'
import { connect } from 'react-redux';

const myFishList = [
   {
       id: 1,
       name: 'Fish 1',
       prise: 50
   },
   {
        id: 2,
        name: 'Fish 2',
        prise: 75
    }   
]
export class AboutScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            random: 0
        }
        this.props.dispatch({type:'SET_FISH_LIST', payload: myFishList})
    }

    componentDidMount(){
        
    }

    getNewFish = ()=>{
        this.setState({random: Math.floor(Math.random() * 3)});
        this.props.dispatch({type:'GET_FISH_BY_INDEX', payload: this.state.random})
    }

    render() {
        return (
            <View>
                <Text>About</Text>
                <Text>{this.props.isLoading?`true`:`false`}</Text>
                <Text>{this.props.Fish?.name}</Text>                
                <Text>{this.props.FishList?.length}</Text>                
                <Button title='Go Back' onPress={()=>this.props.navigation.goBack()}/>                
                <Button title='Get Another Fish' onPress={this.getNewFish}/>                
            </View>
        )
    }
}



function mapStateToProps(state){
    return {
        FishList: state.FishList,
        Fish:state.Fish,
        isLoading: state.isLoading
    }
}


export default connect(mapStateToProps)(AboutScreen)
