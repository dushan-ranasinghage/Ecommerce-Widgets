import React, { Component } from 'react';
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

import Layout from './containers/Layout';
import TestCompo from './components/TestCompo';
import Navbar from './components/Navbar'

import img from './logo.svg'

class App extends Component<any, any> {
    render() {
        return (
            <React.Fragment>
                {/* <Layout />
                <TestCompo name="Randika" /> */}
                <Navbar image={img}/>
                <Container text style={{ marginTop: '7em' }}>
                    <Header as='h1' >Widgets</Header>
                    <List divided relaxed>
                        <List.Item>
                            <List.Icon name='github' size='large' verticalAlign='middle' />
                            <List.Content>
                                <List.Header as='a'>Search Bar</List.Header>
                                <List.Description as='a'>Updated 10 mins ago</List.Description>
                            </List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Icon name='github' size='large' verticalAlign='middle' />
                            <List.Content>
                                <List.Header as='a'>Social Media Widget</List.Header>
                                <List.Description as='a'>Updated 22 mins ago</List.Description>
                            </List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Icon name='github' size='large' verticalAlign='middle' />
                            <List.Content>
                                <List.Header as='a'>Community, Comments and Forum</List.Header>
                                <List.Description as='a'>Updated 34 mins ago</List.Description>
                            </List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Icon name='github' size='large' verticalAlign='middle' />
                            <List.Content>
                                <List.Header as='a'>Booking Widget</List.Header>
                                <List.Description as='a'>Updated 34 mins ago</List.Description>
                            </List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Icon name='github' size='large' verticalAlign='middle' />
                            <List.Content>
                                <List.Header as='a'>Customer Service Widget</List.Header>
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

