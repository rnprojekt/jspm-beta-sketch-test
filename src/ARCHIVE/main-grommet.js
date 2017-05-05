import React from 'react';
import ReactDOM from 'react-dom';
import {HelloWorld} from 'jspm-beta-sketch-test/component.js';

// hot-reload
// http://jspm.io/0.17-beta-guide/hot-reloading.html
import { module } from '@hot';

/*
// https://github.com/grommet/grommet-ferret/blob/master/src/js/index.js
import {App} from './test/grommet/App';

function TEST_grommet(container) {
  // TODO: samsara onRender
  let component = ReactDOM.render(React.createElement(App), container);
  if (module) {
    component.setState(module.component.state);
  }
  // document.body.classList.remove('loading');
}

function TEST_component(container) {
  let component = ReactDOM.render(React.createElement(HelloWorld), container);

  if (module) {
    component.setState(module.component.state);
  }
  // non-hot-reload
  // let container = document.getElementById('container');
  // let component = ReactDOM.render(React.createElement(HelloWorld), container);
}
*/

// main container
function main() {
  let root = document.createElement('div');
  root.setAttribute("id", "container");
  window.document.body.appendChild(root);
  let container = document.getElementById('container');
  // TEST_component(container);
  // TEST_grommet(container);
}

// wait for body ready
if(! window.document.body) {
  window.onload = main;
}
else {
  main();
}
