import React from "react";
import { Text, View, Modal, Button, StyleSheet, TouchableOpacity, AppRegistry} from "react-native";
import { Component } from "react";
import { SafeAreaView } from "react-native";
//import {Constants} from 'expo'; 
import type { Node } from "react";


export default class MyParentComponent extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      myInteger : 0
    }
  }

  getRandomInteger(){
    const randomInt = Math.floor(Math.random()*100);

    this.setState({
      myInteger: randomInt
    });
  }

  incrementInteger(){
    this.setState((previousState, currentProps) => {
      return{
        myInteger: previousState.myInteger+1
      }
    });
  }

  render(){
    return <View style={styles.container}>
      <Text>Parent Component Integer: {this.state.myInteger}</Text>
      <MyChildComponent myInteger = {this.state.myInteger}/>
      <Button label="Get Random Integer" onPress={this.getRandomInteger.bind(this)} />
      <Button label="Increment Integer" onPress={this.incrementInteger.bind(this)}/>
      </View>
  }
}

class MyChildComponent extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return <View>
      <Text>Child Component Integer: {this.props.myInteger}</Text>
      </View>
  }
}

class Button extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return <TouchableOpacity onPress={this.props.onPress}>
      <View style = {styles.button}>
        <Text style={styles.buttonText}>{this.props.label}</Text>
      </View>
    </TouchableOpacity>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  button: {
    backgroundColor: '#444',
    padding:10,
    marginTop: 10
  },
  buttonText: {
    color: '#fff'
  }
});

AppRegistry.registerComponent('MyApp', ()=> MyParentComponent)
// export default class App extends Component{
//   state = {
//     modalVisible: false,
//   };

//   _handleButtonPress = () => {
//     this.setModalVisible(true);
//   };

//   setModalVisible = (visible) =>{
//     this.setState({modalVisible: visible});
//   }

//   render(){
//     var modalBackgroundStyle = {
//       backgroundColor: 'rgba(123,241,149,0,5)'
//     };

//     var innerContainerTransparentStyle = {backgroundColor: '#fff', padding:20};
//     return(
//       <View style= {styles.container}>
//         <Modal animationType="fade" transparent= {true}
//         visible={this.state.modalVisible}
//         //onRequestClose={() => this.setModalVisible(false)}
//         >
//         <View style = {[styles.container, modalBackgroundStyle]}>
//           <View style = {innerContainerTransparentStyle}>
//             <Text>This is a modal</Text>
//             <Button title= 'close' onPress={this.setModalVisible.bind(this, false)}/>
//           </View>
//         </View>
//         </Modal>
//         <Button title= "Press me" onPress={this._handleButtonPress}/>
//       </View>
//     );
//   }
//  }

//  const styles = StyleSheet.create({
//    container: {
//      flex: 1,
//      alignItems: 'center',
//      justifyContent: 'center',
//      //paddingTop: Constants.statusBarHeight,
//      backgroundColor: '#ecf0f1',
//    }
//  });

// const styles = StyleSheet.create({
//   mainContainer: {
//     marginTop:22,
//   },
//   modalContainer:{
//     marginTop:22,
//   },
// });

// class Example extends Component{
//   constructor(){
//     super();
//     this.state = {
//       visibility: false,
//     };
//   }
//   setModalVisibility(visible){
//     this.setState({
//       visibility:visible
//     });
//   }

//   render(){
//     return(
//       <View style={styles.mainContainer}>
//         <Modal animationType={'slide'}
//         transparent={false}
//         visible={this.state.visibility}>
//         <View style= {styles.modalContainer}>
//           <View style = {{alignItems: "center"}}> 
           
//           <Text>I'm a simple Modal</Text>
//           <Button color="#093" onPress={()=> this.setModalVisibility(!this.state.visibility)}
//           title="Hide Modal"/>
//         </View>
//       </View>
//       </Modal>
//       <Button color = "#070" onPress={()=> this.setModalVisibility(true)}
//       title="Show Modal"
//       />
//       </View>
//     );
//   }
// }
// class Greeting extends Component {
//   render() {
//     return <Text>Hello {this.props.name}!</Text>;
//   }
// }
// class LotsOfGreetings extends Component {
//   render() {
//     return (
//       <View style={{ alignItems: "center" }}>
//         <Greeting name="Rexxar" />
//         <Greeting name="Jaina" />
//         <Greeting name="Valeera" />
//       </View>
//     );
//   }
// }

// class Example extends Component {
//   render(){
//     return (
//       <View>
//         <Text>{this.props.name}</Text>
//       </View>

//     );
//   }
// }
// Example.defaultProps = {
//   name : 'John'
// }

// class MultipleVars extends Component{
//   render(){
//     let firstName = 'test';
//     let lastName = 'name';
//     return(
//       <View>
//         <Text>
//           {`${firstName} ${lastName}`}
//         </Text>
//       </View>
//     );
//   }
// }
// const App: () => Node = () => {
//   return (
//     <SafeAreaView> 
//       <Example/>
//     </SafeAreaView>
//   );
// };
// export default App;