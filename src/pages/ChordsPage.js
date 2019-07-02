import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './style'


export default class App extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.welcome}>Welcome to Ukefy!</Text>
      </View>
    )
  }
}