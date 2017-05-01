
// Style

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
  size = [true,true]
}
const defaultProps = {
  size: size,
  classes: ['bg-white', 'navy'],
  align:[0.5,0.5],
  origin: [0.5,0.5],
  title: 'Login Form'
};

const renderProps = {
  timeout: 250,
  duration: 250
};

export default class GrommetLoginForm extends mix (Component )
  .with( OpacityMix ) {

  constructor(props = {}) {
    super( extend( clone( defaultProps ), props ) );
    this.props.onSubmit = this.onSubmit;
  }

  componentDidMount() {
    this.render();
  }

  render() {
    this.renderReactElement( LoginForm, renderProps, () => {
      console.log('render renderReactElement finished');
    });
  }

  onSubmit(event) {
    console.debug('LoginForm.onSubmit', event);
  }

} // class
