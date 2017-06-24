import Expo from 'expo';
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Image, View, StyleSheet, AppRegistry } from 'react-native';
import { Container, Content, H1, H2, TextInput, Text, Button, Form, Icon, Item, Input} from 'native-base';

import ActivityScreen from './activities.js';

export default class HomeScreen extends Component {

  render() {

    const code = Math.ceil(Math.random() * 10000);
    const today = new Date().toLocaleString()
    
    return (


      <View style={styles.container}>
         
            <View style={styles.content}>
              
             
              <View style={styles.welcome}>

              <Image style={styles.logo} source={require('../assets/images/brain.png')} />
              
              <H1>Welcome back to THINKback!</H1>

              <H2>It is {today}.</H2>
              </View>

              <View style={styles.daily}>
              <Text> Your Daily Code is {code}. </Text>
              <Text> Please type this in the box below.</Text>
              </View>
              
              <View>
              <Form style={{ width: 165, marginBottom: 10}}>
                <Item rounded>
                  <Input placeholder=' Click Here to Type' maxLength={4}/>
                </Item>
              </Form>
              </View>

              <View style={styles.button}>
              <Button iconLeft rounded success
              onPress={() => this.props.navigator.push('activities')}>
                <Icon name='home' />
                <Text style={{ alignItems: 'center'}}>Click here to check your answer!</Text>
              </Button>
              </View>
        
           </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: undefined,
    height: undefined,
    backgroundColor: '#D5F5E3',
  },
    content: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

  },
    logo: {
    height: 400,
    width: 315,
    marginBottom: 5,
  },
    welcome: {
    marginBottom: 45,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
    daily: {
    marginBottom: 15,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
    button: {
    marginTop: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const thinkback = StackNavigator({
  home: { screen: HomeScreen },
  activities: { screen: ActivityScreen },

  });

AppRegistry.registerComponent('thinkback', () => HomeScreen);




