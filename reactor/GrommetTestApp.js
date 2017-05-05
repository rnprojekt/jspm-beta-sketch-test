// Style

// Imports

// Mixins
import {mix} from 'mixwith';
import {SamsaraAppMix} from 'reactor/mixins/SamsaraAppMix.js';

// Components
import Component from 'reactor/Component.js';

// Applications
import {GrommetAppMix} from 'reactor/mixins/GrommetAppMix.js';
import GrommetLoginForm from 'reactor/grommet/GrommetLoginForm/GrommetLoginForm.js';

// Class
export default class extends mix( Component )
  .with( SamsaraAppMix,
         GrommetAppMix ) {

  constructor( props ) {
    super( props );
  }

  componentWillMount() {
    let login = new GrommetLoginForm();
    this.mountComponent( login );
  }
} // class
