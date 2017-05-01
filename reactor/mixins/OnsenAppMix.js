/*
https://onsen.io

./jspm install npm:onsenui
*/

// Style
import 'onsenui/css/onsenui.css!';
import 'onsenui/css/onsen-css-components.css!';

// Mixin Class
export let OnsenAppMix = (superclass) => class extends superclass {

  constructor(props = {}) {
    super( props );
  }

};
