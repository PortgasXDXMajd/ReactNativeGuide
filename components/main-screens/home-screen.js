import React, { Component } from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'

const styles = StyleSheet.create({
    pageContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});


class HomeScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            count:0,
            text:'',
            age:0,
            obj:{
                text:'Fuck You'
            }
        }
        this.sendAlert = this.sendAlert.bind(this);
    }

    static getDerivedStateFromProps(props,state){
        return {
        }
    }

    

    //This will be called after the component is rendered.
    componentDidMount(){
        setTimeout(()=>{this.setState({obj:{text:"I Love you"}})},1000);
    }

    sendAlert( ev){
        alert(ev.type)
    }

    onSubmit = (ev)=>{
        ev.preventDefault();
        let age = this.state.age;
        if (!Number(age)) {
            alert("Your age must be a number");
        }
    }
    onChange = (ev)=>{
       let nam = ev.target.name;
       let val  = ev.target.value;
       this.setState({
           [nam]:val
       });


    }

    render() {
        let header = <div></div>
        if(this.state.text != ''){
            header = <View>
                        <h2>{this.state.text}</h2>
                        <h2>{this.state.age}</h2>
                    </View>
        }else{
            header = <div></div>
        }

        return (
            <View style={styles.pageContainer}>
                {header}
                <Button title='add' onPress={()=>this.setState({count:this.state.count+1})}/>
                <Text>{this.state.count}</Text>
                <Button title='minus' onPress={()=> this.setState({count:this.state.count-1})}/>
                <Button title='alert' onPress={(ev)=>this.sendAlert(ev)}/>
                <Text>{this.state.obj.text}</Text>
                <form>
                    <input type="text" name='text' onChange={this.onChange}/>
                    <input type="number" name='age' onChange={this.onChange}/>
                    <input type="submit"/>
                </form>
                <Button title='Go About' onPress={()=>this.props.navigation.navigate('AboutScreen')}/>

            </View>
        )
    }
}

export default HomeScreen


function homeScreen(){
    const state = {
        count:0
    }

    return (
        <View style={styles.pageContainer}>
            <Button title='add' onPress={()=>this.setState({count:this.state.count+1})}/>
            <Text>{state.count}</Text>
            <Button title='minus' onPress={()=> this.setState({count:this.state.count-1})}/>
            <Text>{this.state.obj.text}</Text>
        </View>
    )
}