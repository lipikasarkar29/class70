import React,{Component} from "react";
import { StyleSheet, Text, View } from 'react-native';
import BottomTabNavigator from "./components/BottomTabNavigator";
import * as Font from "expo-font";
import { Rajdhani_600SemiBold } from "@expo-google-fonts/rajdhani";

export default class App extends Component {
  constructor(){
    super();
    this.state={
      fontsLoaded: false
    }
  }

  async loadFonts(){
    await Font.loadAsync({
      Rajdhani_600SemiBold:Rajdhani_600SemiBold
    })
    this.setState({fontsLoaded:true})
  }

  componentDidMount(){
    this.loadFonts()
  }

  render(){
    const {fontsLoaded}=this.state
    if(fontsLoaded){
      <BottomTabNavigator/>
    }
  return null;
    
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
