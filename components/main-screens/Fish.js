import React, { Component } from 'react'
import { View, Text, Button} from 'react-native'
import { connect } from 'react-redux';

export class Fish extends Component {
    constructor(props){
        super(props)
    }

    addFishToFav = ()=>{
        this.props.dispatch({type:'ADD_FISH_TO_FAV', payload:this.props.fish});
    }

    render() {
        return (
            <View style={{flex:1, flexDirection:'row',justifyContent:'space-evenly'}}>
                <Text>{this.props.fish.name}</Text>
                <Text>{this.props.fish.prise}</Text>
                {this.props.isButtonNeeded? <Button title='add to fav' onPress={this.addFishToFav}/>:<div></div>}
            </View>
        )
    }
}

function mapStateToProps(state){
    return {
        FishList: state.FishList,
        MyFavFishList: state.MyFavFishList,
        Fish:state.Fish,
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps)(Fish)
