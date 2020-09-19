import React from 'react';
import logo from './logo.svg';
import './App.css';

// 引入高阶组件
import { withRouter } from 'react-router-dom'

class App extends React.Component {
  state = {
    num : 10
  }
  changeNumber = ()=>{
    this.setState({
      num : this.state.num + 1
    })
  }

  render() {
    return (
      <div className="App">
        HELLO testsss
        <button onClick={this.changeNumber}>change Number</button>
      </div>
    );
  }
}

export default App;
