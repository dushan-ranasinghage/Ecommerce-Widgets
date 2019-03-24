import React, { Component } from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
import PropTypes from 'prop-types'

interface Props {
  user ?: string;
}

class Welcome extends Component<Props> {
  render () {
    return (
      <div>
        <div>Welcome {this.props.user}</div>
      </div>
    );
  }
}

const withUser = (WrappedComponent : typeof React.Component) => {
  return class extends Component<Props, any > {
    render(){
      if(this.props.user){
        return(
          <WrappedComponent { ...this.props} />
        )
      } else{
        return <div>Welcome Guest!</div>
      }
    }
  }
}

export default withUser(Welcome);

