// Style

// Imports

// Mixins
import {mix} from 'mixwith';
import {SamsaraAppMix} from 'reactor/mixins/SamsaraAppMix.js';

// Components
import Component from 'reactor/Component.js';

// Applications
import {SemanticAppMix} from 'reactor/mixins/SemanticAppMix.js';
import SemanticLoginForm from 'reactor/semantic/SemanticLoginForm/SemanticLoginForm.js';

// Class
export default class extends mix( Component )
  .with( SamsaraAppMix,
         SemanticAppMix ) {

  constructor( props ) {
    super( props );
  }

  componentWillMount() {
    let login = new SemanticLoginForm();
    this.mountComponent( login );
  }
} // class
