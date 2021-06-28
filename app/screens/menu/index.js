import React, {Component} from 'react'
import{View, Text,} from 'react-native';
import  commonStyles from 'assets/styles'
import styles from './style'
import strings from 'assets/string'

export default class Menu extends Component {
  render(){
    return (
      <View style= {commonStyles.container}>
        <Text>{strings.welcomeBack}</Text>
      </View>
    )
  }
}