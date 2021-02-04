import logo from './logo.svg';
import './App.css';
import { ExampleComponent } from 'common-utils'
import 'common-utils/dist/index.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ExampleComponent text="Create React Library Example 😄" />
    </div>
  );
}

export default App;