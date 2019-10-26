import * as React from 'react';
import {View,StyleSheet} from 'react-native';
import Calculator from './components/Calculator';

export default class App extends React.Component{
  render()
  {
    return(
      <View style={styles.container}>
      <Calculator/>
      </View>
    );
  }
}
const styles= StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24
  },
});