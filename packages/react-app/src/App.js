import './App.css';
import ExampleComponent from 'common-utils'
import LoginComponent from 'login-component';
import 'common-utils/dist/index.css'

function App() {
  return (
    <div>
      {/* <ExampleComponent text="Create React Library Example 😄" date={new Date()} /> */}
      <LoginComponent />
    </div>
  );
}

export default App;
