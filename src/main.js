
// import Reactor from 'reactor/Reactor.js';
// import App from 'reactor/GrommetTestApp.js';
// import App from 'reactor/SemanticTestApp.js';

// https://tympanus.net/codrops/2017/05/09/infinite-tubes-with-three-js/

// hot-reload
// http://jspm.io/0.17-beta-guide/hot-reloading.html
import { module } from '@hot';

import {createElement} from 'reactor/core.js';
// import App from 'reactor/ThreeTestApp.js';
import App from 'reactor/TwoTestApp.js';
// import App from 'reactor/SemanticTestApp.js';


// TODO
// https://stanko.github.io/html-canvas-video-player/


// New


// Old
let app = null;

function createApp(container) {
  try {
    app = new App( {
      container: container
    });
    app.render();
  }
  catch(err) {
    console.error('ERROR', err);
  }
}

// main container
function main() {
  if(module) {
    console.debug('TODO: samsara + hot-reload',module);
  }
  else {
    createApp( createElement('div', 'container' ) );
  }
}

// wait for body ready
if(! window.document.body) {
  window.onload = main;
}
else {
  main();
}
