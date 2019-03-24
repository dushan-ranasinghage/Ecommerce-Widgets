import React, { Component } from 'react';

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

