import * as React from 'react';

import LoginUsername from './components/loginUsername';
import LoginPassword from './components/loginPassword';

interface Props {
}

interface State {
  user: boolean
}

export default class LoginComponent extends React.Component <Props, State> {
  constructor (props: any) {
    super(props);
    this.state = { user: false };
  }
  handleUsername = () => {
    this.setState((state: State) => {
      return { user: !state.user };
    });
  }
  handlePassword = () => {
    this.setState({ user: false });
  }
  render () {
    return <div>
      <h2>Login</h2>
        {this.state.user ? <LoginPassword handleClick={this.handlePassword} /> : <LoginUsername handleClick={this.handleUsername} />}
    </div>
  }
}
