
import Reactor from 'reactor/Reactor.js';

// hot-reload
// http://jspm.io/0.17-beta-guide/hot-reloading.html
import { module } from '@hot';

let app = null;

// main container
function main() {
  if(module) {
    console.log('TODO: samsara + hot-reload',module);
  }
  else {
    let root = document.createElement('div');
    root.setAttribute("id", "container");
    window.document.body.appendChild(root);
    let container = document.getElementById('container');

    app = new Reactor( {
      container: container
    });
    app.render();
  }
}

// wait for body ready
if(! window.document.body) {
  window.onload = main;
}
else {
  main();
}
