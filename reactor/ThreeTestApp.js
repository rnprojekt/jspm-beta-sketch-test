// Style

// Imports
import THREE from 'threejs';

// Mixins
import {mix} from 'mixwith';
import {SamsaraAppMix} from 'reactor/mixins/SamsaraAppMix.js';
import {CanvasMix} from 'reactor/mixins/CanvasMix.js';

// Components
import Component from 'reactor/Component.js';

// Applications

// Store


// Class
export default class extends mix( Component )
  .with( SamsaraAppMix, CanvasMix ) {

  constructor( props ) {
    props.classes = ['bg-blue'];
    super( props );
  }

  componentWillMount() {
  }

  componentDidMount(target) {
    this.renderer = new THREE.WebGLRenderer({
      canvas: target
    });
  }
} // class
