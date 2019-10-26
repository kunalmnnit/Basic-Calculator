import * as React from 'react';
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native';

export default class Calculator extends React.Component{
  state ={
    display: '0'
  }
  _handleClick(btnval){
    let result=this.state.display;
    if(result==='0')
      result=''
    if(result==='')
    {
      if(btnval==='/' || btnval==='*' || btnval==='-' || btnval==='+')
      {
        result='0'
      }
    }
    if((result.charAt(result.length-1)==='/' || result.charAt(result.length-1)==='*' || result.charAt(result.length-1)==='-' || result.charAt(result.length-1)==='+') && btnval==='='){
      //Do Nothing
    }
    else if(btnval==='='){
      result=String(eval(result))
    }
    else if(btnval=='AC')
    {
      result='0'
    }
    else{
      if(result.charAt(result.length-1)==='/' || result.charAt(result.length-1)==='*' || result.charAt(result.length-1)==='-' || result.charAt(result.length-1)==='+' )
    {
      if(btnval==='/' || btnval==='-' || btnval==='*' || btnval==='+' ){
        //Do Nothing
      }
      else
        result+=btnval
    }
    else
      result+=btnval
    
    }
    this.setState({
      display: result
    })
  }
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.display}>{this.state.display}</Text>
        <View style={styles.row}>
          <MyButton val={7} handleClick={this._handleClick.bind(this)}/>
          <MyButton val={8} handleClick={this._handleClick.bind(this)}/>
          <MyButton val={9} handleClick={this._handleClick.bind(this)}/>
          <MyButton val={'/'} handleClick={this._handleClick.bind(this)} highlight/>
        </View>
        <View style={styles.row}>
          <MyButton val={4} handleClick={this._handleClick.bind(this)}/>
          <MyButton val={5} handleClick={this._handleClick.bind(this)}/>
          <MyButton val={6} handleClick={this._handleClick.bind(this)}/>
          <MyButton val={'*'} handleClick={this._handleClick.bind(this)} highlight/>
        </View>
        <View style={styles.row}>
          <MyButton val={1} handleClick={this._handleClick.bind(this)}/>
          <MyButton val={2} handleClick={this._handleClick.bind(this)}/>
          <MyButton val={3} handleClick={this._handleClick.bind(this)}/>
          <MyButton val={'-'} handleClick={this._handleClick.bind(this)} highlight/>
        </View>
        <View style={styles.row}>
        <MyButton val={'AC'} handleClick={this._handleClick.bind(this)}/>
        <MyButton val={0} handleClick={this._handleClick.bind(this)}/>
        <MyButton val={'='} handleClick={this._handleClick.bind(this)}/>
        <MyButton val={'+'} handleClick={this._handleClick.bind(this)} highlight/>
        </View>
      </View>
    );
  }
}

const MyButton=({val,handleClick,highlight})=>(
  <TouchableOpacity style={[styles.btn,{backgroundColor: (highlight)?'#335':'#5086f8'}]} onPress={()=>{
    handleClick(val)
  }}>
    <Text style={styles.btnTxt}>
      {val}
    </Text>
  </TouchableOpacity>
  )

const styles=StyleSheet.create({
  container: {
      flex:1,
      justifyContent:'flex-end',
  },
  display: {
    fontSize: 70,
    padding: 20,
    textAlign:'right',
  },
  row: {
    flexDirection: 'row',
  },
  btnTxt: {
    fontSize: 30,
    color:'white',
    textAlign: 'center',
  },
  btn: {
    flex: 1,
    padding: 20,
  },
});