import React, { Component } from 'react';
import Layout from './containers/Layout';
import TestCompo from './components/TestCompo';

interface Props {
  user ?: string;
}

class App extends Component<Props> {
    render() {
        return (
            <React.Fragment>
                <Layout />
                <TestCompo name="Randika" />
            </React.Fragment>
        );
    }
}

export default App;

