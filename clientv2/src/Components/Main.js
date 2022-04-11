

import React from 'react'
// import ReactDOM from 'react-dom'

class Main extends React.Component {
  componentDidMount() {
    const temp1 = document.getElementById('song');
    debugger;
    document.getElementById('song').play();
// document.getElementById("welcome").pause();
  }

  render () {
      return (
        <div className='body'>
            <div className='body pane pane1'>
            <h1>Welcome to the <span className='app-name'>App</span></h1>
            {/* <p>Your account: {this.state.account}</p> */}
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
    )
  }
}

export default Main