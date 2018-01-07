import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
    StyleSheet,
    Linking,
    Image,
    Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SafariView from 'react-native-safari-view';
import LoginForm from './LoginForm'
import Logo from './Logo'
import HomePage from '../dashboard/HomePage'
import { Actions } from 'react-native-router-flux';

export default class Login extends Component<{}> {
  state = {
    user: undefined, // user has not logged in yet
  };

    // Set up Linking
  componentDidMount() {
    // Add event listener to handle OAuthLogin:// URLs
    Linking.addEventListener('url', this.handleOpenURL);
    // Launched from an external URL
    Linking.getInitialURL().then((url) => {
      if (url) {
        this.handleOpenURL({ url });
      }
    });
  };

  componentWillUnmount() {
    // Remove event listener
    Linking.removeEventListener('url', this.handleOpenURL);
  };

  handleOpenURL = ({ url }) => {
    // Extract stringified user string out of the URL
    const [, user_string] = url.match(/user=([^#]+)/);
    this.setState({
      // Decode the user string and parse it into JSON
      user: JSON.parse(decodeURI(user_string))
    })
    if (Platform.OS === 'ios') {
      SafariView.dismiss();
    }
  };

  // Handle Login with Facebook button tap
  loginWithFacebook = () => this.openURL('http://localhost:3000/auth/facebook');

  // Open URL in a browser
  openURL = (url) => {
    // Use SafariView on iOS
    if (Platform.OS === 'ios') {
      SafariView.show({
        url: url,
        fromBottom: true,
      });
    }
    // Or Linking.openURL on Android
    else {
      Linking.openURL(url);
    }
  };

  render() {
    if (this.state.user) {
      return (
        <HomePage />
      )
    } else {
      return (
        <View style={styles.container}>
          <Logo />
          <View style={styles.formContainer}>
            <LoginForm />
          </View>
          <View style={styles.signUpContainer}>
            <Text onPress={Actions.register}>Don't have an account? Sign up!</Text>
          </View>
          <View style={styles.buttons}>
            <Icon.Button
              name="facebook"
              backgroundColor="#3b5998"
              onPress={this.loginWithFacebook}
              {...iconStyles}
            >
              Login with Facebook
            </Icon.Button>
          </View>
        </View>
      )
    }
  }
}

const iconStyles = {
  borderRadius: 10,
  iconStyle: { paddingVertical: 5 },
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#00695c',
  },
  signUpContainer: {
    marginTop: 10,
    marginBottom: 100,
    alignItems: 'center',
  },
  buttons: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 20,
    marginBottom: 30,
  },
})
