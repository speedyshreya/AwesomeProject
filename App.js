import React from "react";
import { Text, View, Modal, Button, StyleSheet, TouchableOpacity, AppRegistry} from "react-native";
import { Component } from "react";
import { SafeAreaView } from "react-native";
//import {Constants} from 'expo'; 
import type { Node } from "react";


export default class MyComponent extends Component {
  constructor(props){
    super(props);

    this.increaseByOne = this.increaseByOne.bind(this);
    this.state = {
      myInteger:0
    }
  }

  increaseByOne(){
    this.setState(previousState => {
      return {
        myInteger: previousState.myInteger + 1
      }
    });
  }

  render(){
    return(
      <View style = {styles.container}>
        <Text>Integer: {this.state.myInteger}</Text>
        <Button label = "Press to increase" onPress={this.increaseByOne} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
       justifyContent: 'center',
        //paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
      }
    });
  

