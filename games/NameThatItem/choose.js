import React, { Component } from 'react'
import { Container, Content, Text, Button, Form, Item, Input, H2 } from 'native-base';


export default class Categories extends Component {


 render() {

        return (
             <Container>
        		<Content>
                
                <H2>Choose A Location</H2>
                <Button>
                    <Text>Around The House</Text>
                </Button>
        
            </Content>
           </Container>
        )
    }
}