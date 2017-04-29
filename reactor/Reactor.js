
// Style

// Imports

// Mixins
import {mix} from 'mixwith';
import {SamsaraAppMix} from 'reactor/mixins/SamsaraAppMix.js';
import {GrommetAppMix} from 'reactor/mixins/GrommetAppMix.js';

// Components
import Component from 'reactor/Component.js';
import LoginForm from 'reactor/LoginForm/LoginForm.js';

// Class
class Reactor extends mix( Component )
  .with( SamsaraAppMix, GrommetAppMix ) {

  constructor( props ) {
    super( props );
  }

  componentWillMount() {
    let login = new LoginForm();
    this.mountComponent( login );

  }
}

// Exports
export default Reactor;
