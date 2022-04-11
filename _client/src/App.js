import React, { Component } from 'react'
import Web3 from 'web3'
import './App.css';

class App extends Component {
  componentWillMount() {
    // this.loadBlockchainData()
  }

  async loadBlockchainData() {
    // const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    // const accounts = await web3.eth.getAccounts()
    // this.setState({ account: accounts[0] })
  }

  constructor(props) {
    super(props)
    this.state = { account: '' }
  }

  render() {
    return (
      <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Web 3</p>
        <code>src/App.js</code>
        <a className="link" href="https://www.google.com" target="_blank" rel="noopener noreferrer">Link To</a>
      </header> */}
      <div class="body">
        {/* // create html for a landing page for the app */}
        <div>
          <h1>Welcome to the <span class="app-name">App</span></h1>

          <p>Your account: {this.state.account}</p>


          <p>This is the list of things that can be done with this app</p>
          <ul>
            <li>Create a new task</li>
            <li>Delete a task</li>
            <li>Edit a task</li>
            <li>Mark a task as complete</li>
            <li>View a list of tasks</li>
          </ul>
        </div>
      </div>
      </div>
    );
  }
}

export default App;