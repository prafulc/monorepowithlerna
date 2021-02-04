import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class ReactWidget {
  constructor (props) {
    this.id = props.id;
  }
  init () {
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById(this.id)
    );
  }
}
console.log('- - - - - - - - - - - - -')
console.log(' = = ', window, ' = = ')
window.ReactWidget = ReactWidget;
console.log('- - - - - - - - - - - - -')
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
