import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Web 3</p>
        <code>src/App.js</code>
        <a className="link" href="https://www.google.com" target="_blank" rel="noopener noreferrer">Link To</a>
      </header>
      <div class="body">
        {/* // create html for a landing page for the app */}
        <div>
          <h1>Welcome to the <span class="app-name">App</span></h1>
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

export default App;
