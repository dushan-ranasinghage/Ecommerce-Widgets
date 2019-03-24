import React, { Component } from 'react';
import Layout from './containers/Layout';
import TestCompo from './components/TestCompo';

class App extends Component<any, any> {
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

