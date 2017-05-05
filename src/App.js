import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ImgLogo extends Component{
  render(){
    return(
        <div>
          <img src={logo} className="App-logo" alt="logo" 
          onClick={() => {this.props.onClickFunc();}} />
        </div>
    )
  }
}

const Counter = (props) => {
  return <p>{props.counter}</p>
}

class App extends Component {
  state = { counter: 0 };

  onClickIncrementState = () => {
     this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  };


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <ImgLogo onClickFunc={this.onClickIncrementState}   />
          <h2>Welcome to React</h2>
        </div>
        <Counter counter={this.state.counter}/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
