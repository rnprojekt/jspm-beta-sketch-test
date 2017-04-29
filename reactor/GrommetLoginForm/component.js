// component.js
/*
import React from 'react';
export class HelloWorld extends React.Component {
  render() {
    return React.createElement('h1', null, 'Hello Moon');
  }
}
*/

import './component.css!';

import LoginForm from 'grommet/components/LoginForm';
import Anchor from 'grommet/components/Anchor';
import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
  }
  render() {
    let element = (
      <LoginForm onSubmit={this.props.onSubmit || this.onSubmit}
        title={this.props.title || 'Sample Title'}
        secondaryText='Sample secondary text'
        forgotPassword={<Anchor href='#'
        label='Forgot password?' />}
        rememberMe={true} />
    );

    return element;
  }

  onSubmit(event) {
    console.log('component.onSubmit', event);
  }
}
