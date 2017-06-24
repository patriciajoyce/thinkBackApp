import React, { Component } from 'react';
import { AppRegistry, Image, View, StyleSheet} from 'react-native';
import { StackNavigator } from 'react-navigation';
import {Container, 
Content, 
H3, 
Text, 
Button,
Icon,
Card,
CardItem,
Left,
Thumbnail,
Body
} from 'native-base';
import { Constants } from 'expo';
import Categories from './choose.js';


export default class DescriptionOne extends Component {
static route = {
    navigationBar: {
      title: 'What Is That?',
    },
  };    

render(){


    return (
      <View style={styles.page}>
    <Container>
        <Content>
          <View style={styles.card}>
        	<Card style={{ flex: 0, width: 380, marginBottom: 25}}>
            <CardItem>
              <Left>
                <Thumbnail style={{ marginBottom: 10}} source={require('../../assets/images/brainicon.png')} />
                  <Body>
           				<H3>Name That Item</H3> 
                  <Text note>Image Recognition</Text>
           				</Body>
                </Left>
            </CardItem>
            <CardItem>
              
            <Left>
              <Body>
              
              <Image style={{ width: 350, height: 200, marginTop: 10, marginBottom: 20}} source={require('../../assets/images/quiz.png')}/>
           		<Text>
             	In this game, you will be give 3 options of familiar places. 
             	After you choose one, there will be five rounds of pictures that 
             	will pop up having to do with the place you chose and four buttons
             	located under the picture. You must click the button that contains the 
             	name of the object in the picture. Good Luck! You can do it! 
           		</Text>
           		
           		</Body>
              </Left>
           	</CardItem>

            </Card>
            </View>

             
            <View style={styles.button}>
						<Button large rounded iconRight success style={{ width: 325}}
            onPress={() => this.props.navigator.push('choose')}>
  					<Text>Lets Begin!</Text>
            <Icon name='arrow-forward' />
						</Button>
				    </View>
       
          
      
      </Content>
      </Container>

      </View>
     


   	);
  }
}



const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: undefined,
    height: undefined,
    backgroundColor: '#FAD7A0',
  },
  card: {
    marginTop: 30,
  },
  button: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
   
});



const SimpleApp = StackNavigator({
  namethatitem: { screen: DescriptionOne },
  choose: { screen: Categories },

});

AppRegistry.registerComponent('SimpleApp', () => SimpleApp);