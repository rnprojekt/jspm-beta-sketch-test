
import './component.css!';

import LoginForm from 'grommet/components/LoginForm';
import Anchor from 'grommet/components/Anchor';
import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let element = (
      <div>
      <LoginForm onSubmit={this.props.onSubmit || this.onSubmit}
        title={this.props.title || 'Sample Title'}
        secondaryText='Sample secondary text'
        forgotPassword={<Anchor href='#'
        label='Forgot password?' />}
        rememberMe={false} />
      </div>
    );
    return element;
  }

  handleClick(event) {

  }

  onSubmit(event) {
    console.log('component.onSubmit', event);
  }
}
