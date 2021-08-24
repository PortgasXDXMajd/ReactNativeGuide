import React, { Component } from 'react'
import { View, Text, Button} from 'react-native'
import { connect } from 'react-redux';
import Fish from './Fish'

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
            random: 0,
            fishName:'',
            fishPrise:0,
            fishId:0
        }
        this.props.dispatch({type:'SET_FISH_LIST', payload: myFishList})
    }

    componentDidMount(){
        
    }

    addNewFish= ()=>{
        console.log(this.state.fishId)
        console.log(this.state.fishName)
        console.log(this.state.fishPrise)
        let fish = {
            id :this.state.fishId,
            name :this.state.fishName,
            prise:this.state.fishPrise,
        }
        this.props.dispatch({type:'ADD_NEW_FISH', payload: fish})
    }

    getNewFish = ()=>{
        this.setState({random: Math.floor(Math.random() * 3)});
        this.props.dispatch({type:'GET_FISH_BY_INDEX', payload: this.state.random})
    }

    myOnChange = (ev)=>{
        let nam = ev.target.name;
        let val  = ev.target.value;
        this.setState({
            [nam]:val
        });
    }

    render() {
        return (
            <View>
                <Text>About</Text>
                <Text>{this.props.isLoading?`true`:`false`}</Text>
                <Text>{this.props.Fish?.name}</Text>                
                <Text>{this.props.FishList?.length}</Text>               
                <Text>{this.props.MyFavFishList?.length}</Text>               
                <Button title='Go Back' onPress={()=>this.props.navigation.goBack()}/>                
                <Button title='Get Another Fish' onPress={this.getNewFish}/>



                <form>
                    <input type='id' placeholder='id' name='fishId' onChange={(ev)=>this.myOnChange(ev)}/>
                    <input type='text'  placeholder='name' name='fishName' onChange={(ev)=>this.myOnChange(ev)}/>
                    <input type='number' placeholder='prise' name='fishPrise' onChange={(ev)=>this.myOnChange(ev)}/>
                    <Button title='add' onPress={this.addNewFish}/>
                </form>

                {this.props.FishList?.map((fish)=>(
                    <Fish fish={fish} isButtonNeeded={true}/>
                ))}

                {this.props.MyFavFishList?.map((fish)=>(
                    <Fish fish={fish} isButtonNeeded={false} />
                ))}

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


export default connect(mapStateToProps)(AboutScreen)
