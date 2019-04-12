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
                <Menu fixed='top' inverted style={{ backgroundColor: '#000' }}>
                    <Container>
                        <Menu.Item as='a' header>
                            <Image size='mini' src={img} style={{ marginRight: '1.5em' }} />
                            Project Name
                        </Menu.Item>
                        <Menu.Item as='a'>Test 1</Menu.Item>
                        <Menu.Item as='a'>Test 2</Menu.Item>
                        <Menu.Item as='a'>Test 3</Menu.Item>
                    </Container>
                </Menu>
                <Container text style={{ marginTop: '7em' }}>
                    <Header as='h1' style={{ color: '#fff' }}>Semantic UI React Fixed Template</Header>
                    <p>This is a basic fixed menu template using fixed size containers.</p>
                    <p>
                        A text container is used for the main container, which is useful for single column layouts.
                    </p>
                </Container>
            </React.Fragment>
        );
    }
}

export default App;

