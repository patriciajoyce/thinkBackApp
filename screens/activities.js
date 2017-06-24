import React, {Component} from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Container, Content, Button, Text, Icon, H2, Thumbnail } from 'native-base';

import DescriptionOne from '../games/NameThatItem/description.js';

export default class ActivityScreen extends Component {
  static route = {
    navigationBar: {
      title: 'Daily Dos',
    },
  };

  render(){

    
    return (

      <View style={styles.container}>
         
        <View style={styles.intro}>
          <Thumbnail large style={{ marginBottom: 10}} source={require('../assets/images/brainicon.png')} />
          <H2 style={{ marginBottom: 40, width: 325}}> 
            Below are some activities for you to exercise your brain and brush up on some skills: </H2>
          <Text style={{ marginBottom: 18, width: 325}}> (Click on one of the activity buttons to read the game description and enjoy!) </Text>
        </View>


        <View style={styles.buttons}>
          <Button large iconLeft rounded danger style={{ marginBottom: 10, width: 325}} 
          onPress={() => this.props.navigator.push('namethatitem')}>
            <Icon name='home' />
            <Text>What Is That?</Text>
          </Button>

          <Button large iconLeft rounded danger style={{ marginBottom: 10, width: 325}}>
            <Icon name='home' />
            <Text>Pop Em </Text>
          </Button>

          <Button large iconLeft rounded danger style={{ marginBottom: 10, width: 325}}>
            <Icon name='home' />
            <Text>Who Are Those?</Text>
          </Button>

           <Button large iconLeft rounded danger style={{ marginBottom: 10, width: 325}}>
            <Icon name='home' />
            <Text>Follow Me</Text>
          </Button>

          <Button large iconLeft rounded danger style={{ marginBottom: 10, width: 325}}>
            <Icon name='home' />
            <Text>Where Do These?</Text>
          </Button>
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
    backgroundColor: '#FAD7A0',
  },
    intro: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
    buttons: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const SimpleApp = StackNavigator({
  activities: { screen: ActivityScreen }, 
  namethatitem: {screen: DescriptionOne },
});

AppRegistry.registerComponent('SimpleApp', () => SimpleApp);

