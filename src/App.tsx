import React, { Component } from 'react';

import Layout from './containers/Layout';
import TestCompo from './components/TestCompo';

import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react'
import img from './logo.svg'
class App extends Component<any, any> {
    render() {
        return (
            <React.Fragment>
                {/* <Layout />
                <TestCompo name="Randika" /> */}
                <Menu fixed='top' inverted style={{ backgroundColor: '#000', height:'45px', minHeight:'45px' }}>
                    <Container>
                        <Menu.Item as='a' header>
                            <Image size='mini' src={img} style={{ marginRight: '1.5em' }} />
                            Home
                        </Menu.Item>
                        <Menu.Item as='a'>Test 1</Menu.Item>
                        <Menu.Item as='a'>Test 2</Menu.Item>
                        <Menu.Item as='a'>Test 3</Menu.Item>
                    </Container>
                </Menu>
                <Container text style={{ marginTop: '7em' }}>
                    <Header as='h1' >Ecommerce widgets</Header>
                    <List divided relaxed>
                        <List.Item>
                            <List.Icon name='github' size='large' verticalAlign='middle' />
                            <List.Content>
                                <List.Header as='a'>Semantic-Org/Semantic-UI</List.Header>
                                <List.Description as='a'>Updated 10 mins ago</List.Description>
                            </List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Icon name='github' size='large' verticalAlign='middle' />
                            <List.Content>
                                <List.Header as='a'>Semantic-Org/Semantic-UI-Docs</List.Header>
                                <List.Description as='a'>Updated 22 mins ago</List.Description>
                            </List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Icon name='github' size='large' verticalAlign='middle' />
                            <List.Content>
                                <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                                <List.Description as='a'>Updated 34 mins ago</List.Description>
                            </List.Content>
                        </List.Item>
                    </List>
                </Container>
            </React.Fragment>
        );
    }
}

export default App;

