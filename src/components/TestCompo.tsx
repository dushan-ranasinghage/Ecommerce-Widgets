import React from 'react'

interface TestProps {
 name?: string,
}

const App: React.SFC<TestProps> = (props) => {
 return <h1>Hello, {props.name}</h1>;
}

export default App;