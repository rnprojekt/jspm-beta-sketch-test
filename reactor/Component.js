
import _ from 'underscore';
const extend = _.extend;
const clone = _.clone;

import React from 'react';
import ReactDOM from 'react-dom';
import {HelloWorld} from 'jspm-beta-sketch-test/component.js';

import Samsara from 'samsara';
const Context = Samsara.DOM.Context;
const Surface = Samsara.DOM.Surface;
const View = Samsara.Core.View;

const defaultProps = {
  size: [true,true],
  classes: ['navy']
};

// TODO: mixwith
class Component {
  constructor( props = {} ) {
    this.props = extend( clone( defaultProps ), props );
    this.initView();
  }

  // Component
  initView() {
    // create template cache
    this._view = new View({
      size: this.props.size,
      origin: this.props.origin || [0,0]
    });

    this._surface = new Surface({
      classes: this.props.classes,
      content: this.props.content || "",
      origin: this.props.origin || [0,0],
      opacity: this.props.opacity ? this.props.opacity : 1
    });

    this._view.input.on('deploy', (event) => {
      // console.log('view deploy',event);
      this.componentDidMount();
    });

    // will mount
    this._view.subscribe(this._surface);
    // this._view.add({opacity: this.props.opacity ? this.props.opacity : 1 }).add( this._surface );
    this._view
      .add( { align: this.props.align || [0,0] } )
      .add( this._surface );

    this.componentWillMount();
  } // initView

  getTarget() {
    return this._surface._currentTarget;
  }

  render() {}

  renderReactElement(elementClass, transition = { timeout: 250, duration: 250 }, callback ) {
    let content = React.createElement( elementClass, this.props );
    let container = this.getTarget();
    // console.log(container);
    let component = ReactDOM.render( content, container, () => {
      this.showTimeout( transition, callback );
    });
  }

  // render() {
  //   this.componentWillMount();
  // }

  hotReload() {
    render();
  }

  componentWillMount() {}

  componentDidMount() {}

  mountComponent(component) {
    this._view
      .add( { align: component.props.align || [0,0] } )
      .add( component._view );
  }

} // class

export default Component;
