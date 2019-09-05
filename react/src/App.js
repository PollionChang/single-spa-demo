import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {


  constructor() {
    super();
    this.state={
      text:'this is a jenkins test!'
    }


    // fetch(
    //   '/site/test'
    // )
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data)
    //     this.setState({text: data.text})
    //   })
    //   .catch(e => console.log('错误:', e))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1>{this.state.text}</h1>
        </header>
      </div>
    );
  }
}


export default App;
