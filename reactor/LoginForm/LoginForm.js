
// Style

// Imports
import _ from 'underscore';
const extend = _.extend;
const clone = _.clone;

import React from 'react';
import ReactDOM from 'react-dom';

import {mix} from 'mixwith';
import GrommetLoginForm from './component.js';
import Component from 'reactor/Component.js';
import {OpacityMix} from 'reactor/mixins/OpacityMix.js';

const defaultProps = {
  size: [true,true],
  classes: ['bg-white', 'navy'],
  align:[0.5,0.5],
  origin: [0.5,0.5],
  title: 'Login Form'
};

class LoginForm extends mix(Component).with( OpacityMix ) {
  constructor(props = {}) {
    super( extend( clone( LoginForm.defaultProps ), props ) );
    this.props.onSubmit = this.onSubmit;
  }

  componentWillMount() {
  }

  componentDidMount() {
    this.render();
  }

  render() {
    this.renderReactElement(GrommetLoginForm, {timeout: 250, duration: 250}, () => {
      console.log('show finished');
    });
  }

  onSubmit(event) {
    console.debug('LoginForm.onSubmit', event);
  }

} // class

// Export
LoginForm.defaultProps = defaultProps;
export default LoginForm;
