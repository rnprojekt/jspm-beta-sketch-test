
// Style
import './component.css!';

// Imports
import _ from 'underscore';
const extend = _.extend;
const clone = _.clone;

import device from 'device.js';

// Mixins
import {mix} from 'mixwith';
import {OpacityMix} from 'reactor/mixins/OpacityMix.js';

// Components
import LoginForm from './component.js';
import Component from 'reactor/Component.js';

let size = [undefined,undefined];

if(device.desktop()) {
  size = [375,567];
}

const defaultProps = {
  size: size,
  classes: ['bg-white'],
  align:[0.5,0.5],
  origin: [0.5,0.5],
  title: 'Login Form',
  timeout: 0,
  duration: 0,
  properties: {
    borderRadius: '2px'
  }
};

export default class SemanticLoginForm extends mix(Component)
  .with( OpacityMix ) {

  constructor(props = {}) {
    super( extend( clone( defaultProps ), props ) );
    this.props.onSubmit = (data,callback) => this.onSubmit(data,callback);
  }

  componentDidMount() {
    this.render();
  }

  render() {
    this.renderReactElement( LoginForm, this.props, () => {
      console.log('render renderReactElement finished');
    });
  }

  onSubmit(data, callback) {
    console.debug('LoginForm.onSubmit', data);
    // TODO:
    let error = false;
    setTimeout( () => {
      this.hideTimeout( {timeout: 2000,  duration : 500} );
      callback(error,data);
    },1000);
  }

} // class
