import React, {Component} from 'react'
import{View, Text,} from 'react-native';
import  commonStyles from 'assets/styles'
import styles from './style'
import strings from 'assets/string'

export default class Game extends Component {
  render(){
    return (
      <View style= {style.container}>
        <Text>{strings.welcomeBack}</Text>
      </View>
    )
  }
}