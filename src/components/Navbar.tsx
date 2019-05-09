import React from 'react'
import {
    Container,
    Image,
    Menu,
  } from 'semantic-ui-react'

interface NavProps {
 image?: string,
 path?: string;
}

class Navbar extends React.Component<NavProps> {
    render () {
      return (<Menu fixed='top' inverted style={{ backgroundColor: '#000', height:'60px', minHeight:'60px', boxShadow: '0 3px 2px -2px grey' }}>
      <Container>
          <Menu.Item as='a' header>
              <Image size='mini' src={this.props.image} style={{ marginRight: '1.5em' }} />
              Home
          </Menu.Item>
          <Menu.Item as='a'>Test 1</Menu.Item>
          <Menu.Item as='a'>Test 2</Menu.Item>
          <Menu.Item as='a'>Test 3</Menu.Item>
      </Container>
  </Menu>);
    }
  }

export default Navbar;