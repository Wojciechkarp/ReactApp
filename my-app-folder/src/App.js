import React, { Component } from 'react';
import { Button } from 'react-native';
import logo from './logo.svg';
import './App.css';



class App extends Component {

  render() {

  function onPressLearnMore(props) {
  return <h1>Hello, {props.name}</h1>;
}
    return (
      <div className="App">
        <header className="App-header">
           <p>
            Welcom my dear bear
          </p>
          <img src={logo} className="App-logo" alt="logo" />
            <Button
              onPress={onPressLearnMore(this.props)}
              title="Learn More"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
