

// Imports
// TODO import
import _ from 'underscore';
const extend = _.extend;
const clone = _.clone;
function cloneDefault( defaults, override ) {
  return extend( clone( defaults ), override );
}

import device from 'device.js';

// Mixins
import {mix} from 'mixwith';
import {OpacityMix} from 'reactor/mixins/OpacityMix.js';
import {FormMix} from 'reactor/mixins/FormMix.js';

// Components
import LoginForm from './Component.js';
import Component from 'reactor/Component.js';

let size = [undefined,undefined];

if(device.desktop()) {
  size = [375,true]; // 467
}

const defaultProps = {
  size: size,
  classes: ['bg-white', 'shadow'],
  align:[0.5,0.5],
  origin: [0.5,0.5],
  title: 'Login Form',
  show: {
    timeout: 0,
    duration: 500
  },
  hide: {
    timeout: 2000,
    duration : 500
  },
  properties: {
    borderRadius: '2px'
  }
};

export default class extends mix(Component)
  .with( OpacityMix,
         FormMix ) {

  constructor(props = {}) {
    super( cloneDefault( defaultProps, props ) );
  }

  // React
  render() {
    this.renderReactElement( LoginForm, this.props.show, () => {
      console.log('render renderReactElement finished');
    });
  }

  // Interface
  onSubmit( form, callback ) {
    console.debug('LoginForm.onSubmit', form);

    // TODO: call api backend
    let error = false;

    if(error) {
      return callback(error,{});
    }

    this.handleLogin(form);
    setTimeout( () => {
      this.hideTimeout( this.props.hide );
      callback(error,{});
    }, 1000 );
  } // onSubmit

  // login successful
  handleLogin(form) {
    let username = form.username;
    this.props.store.dispatch({
      type: 'LOGIN',
      value: username
    });
  } // handleLogin

} // class
