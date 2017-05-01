/*
http://samsarajs.org/
*/

/* TODO
  https://github.com/JakeSidSmith/react-fastclick

*/

// Style
import 'colors.css/css/colors.css!';
import 'samsara/dist/samsara.css!';
import 'style/samsara.css!';

// Imports
import FastClick from 'fastclick';

import _ from 'underscore';
const extend = _.extend;
const clone = _.clone;

// Samsara
import Samsara from 'samsara';
const Context = Samsara.DOM.Context;

// Defaults
const defaultProps = {
  size: [undefined, undefined],
  classes: ['bg-blue', 'navy'],
  content: "<middle>Samsara App</middle>"
};

// Mixin Class
export let SamsaraAppMix = (superclass) => class extends superclass {

  constructor(props = {}) {
    super( extend( clone( defaultProps ), props ) );
    this.initContext( props.container );
    this.initView();
    this._context.add(this._view);
  }

  initContext( container = document.body ) {
    this._context = new Context();
    this._context.on('resize', (size) => {
      // this.emit('resize',size);
      // console.log('resize',size);
    });
    this._context.on( 'deploy', (target) => {
      this._target = target;
      // console.log('target',target);
      // did mount
    });
    this._context.mount(container);
    // FastClick.attach(document.body);
  } // initContext

};
