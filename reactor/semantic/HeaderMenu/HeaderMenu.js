

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
import MenuForm from './Component.js';
import Component from 'reactor/Component.js';

let size = [undefined,undefined];

if(device.desktop()) {
  size = [undefined,true];
}

const defaultProps = {
  size: size,
  classes: ['bg-white'],
  align:[0.5,0],
  origin: [0.5,0],
  title: 'Login Form',
  show: {
    timeout: 0,
    duration: 500
  },
  hide: {
    timeout: 2000,
    duration : 500
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
    this.renderReactElement( MenuForm, this.props.show, () => {
      console.log('render renderReactElement finished');
    });
  }

  // Interface

} // class
