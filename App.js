import React, { Component } from 'react';
import { Text, Navigator, TouchableHighlight } from 'react-native';
export default class NavAllDay extends Component { render() {
return ( <Navigator
        initialRoute={{ title: 'Awesome Scene', index: 0 }}
        renderScene={(route, navigator) =>
          <Text>Hello {route.title}!</Text>
        }
        style={{padding: 100}}
      />
); }
}

// export default class MyComponent extends Component {
//   constructor(props){
//     super(props);

//     //this.increaseByOne = this.increaseByOne.bind(this);
//     this.state = {
//       myInteger:0
//     }
//   }

//   increaseByOne(){
//     this.setState(previousState => {
//       return {
//         myInteger: previousState.myInteger + 1
//       }
//     });
//   }

//   render(){
//     return(
//       <View style = {styles.container}>
//         <Text>Integer: {this.state.myInteger}</Text>
//         <Button title = "Press to increase" onPress={this.increaseByOne.bind(this)} />
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//       container: {
//         flex: 1,
//         alignItems: 'center',
//        justifyContent: 'center',
//         //paddingTop: Constants.statusBarHeight,
//         backgroundColor: '#ecf0f1',
//       }
//     });
  

