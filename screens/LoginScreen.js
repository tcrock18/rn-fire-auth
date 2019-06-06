import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class LoginScreen extends Component {

    signInWithGoogleAsync = async() => {
        try {
            const result = await Expo.Google.logInAsync({
                behavior: 'web',
                // webClientId: CLIENT_ID,
                iosClientId: CLIENT_ID,
                scopes: ['profile', 'email'],
            });
            if(result.type === 'success') {
                return result.accessToken;
            } else {
                return { cancelled: true };
            }
        } catch(e) {
            return {error: true};
        }
    }

  render() {
    return (
      <View style={styles.container}>
        <Button 
        title='Sign In With Google' 
        onPress={() => this.signInWithGoogleAsync()}/>
      </View>
    );
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
