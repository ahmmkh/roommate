import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity,StyleSheet} from 'react-native';

export default class SignUpForm extends Component<{}> {
  render() {
    return (
      <View>

      <TextInput style = {styles.input}
               autoCapitalize="none"
               onSubmitEditing={() => this.passwordInput.focus()}
               autoCorrect={false}
               keyboardType='default'
               returnKeyType="next"
               placeholder='First Name'
               placeholderTextColor='rgba(225,225,225,0.7)'/>

      <TextInput style = {styles.input}
               autoCapitalize="none"
               onSubmitEditing={() => this.passwordInput.focus()}
               autoCorrect={false}
               keyboardType='default'
               returnKeyType="next"
               placeholder='Last Name'
               placeholderTextColor='rgba(225,225,225,0.7)'/>

      <TextInput style = {styles.input}
               autoCapitalize="none"
               onSubmitEditing={() => this.passwordInput.focus()}
               autoCorrect={false}
               keyboardType='email-address'
               returnKeyType="next"
               placeholder='Email'
               placeholderTextColor='rgba(225,225,225,0.7)'/>

      <TextInput style = {styles.input}
                    returnKeyType="go"
                    ref={(input)=> this.passwordInput = input}
                    placeholder='Password'
                    placeholderTextColor='rgba(225,225,225,0.7)'
                    secureTextEntry/>

      <TextInput style = {styles.input}
                    returnKeyType="go"
                    ref={(input)=> this.passwordInput = input}
                    placeholder='Re-enter Password'
                    placeholderTextColor='rgba(225,225,225,0.7)'
                    secureTextEntry/>

      <TouchableOpacity style={styles.buttonContainer}
                           onPress={this._onButtonPress}>
                   <Text  style={styles.buttonText}>CREATE ACCOUNT</Text>
      </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
     padding: 20
    },
    input:{
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.3)',
        marginBottom: 10,
        marginRight: 40,
        marginLeft: 40,
        padding: 10,
        color: '#fff',
        borderRadius:0
    },
    buttonContainer:{
        backgroundColor: '#003d33',
        paddingVertical: 15,
        borderRadius: 10,
        marginRight: 40,
        marginLeft: 40
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    }
})
