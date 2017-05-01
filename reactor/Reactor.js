/*
  TODO
  http://reactdesktop.js.org/
  https://github.com/brillout/awesome-react-components#ui-layout
*/

// Style

// Imports

// Mixins
import {mix} from 'mixwith';
import {SamsaraAppMix} from 'reactor/mixins/SamsaraAppMix.js';

// Components
import Component from 'reactor/Component.js';

// Applications
// import {GrommetAppMix} from 'reactor/mixins/GrommetAppMix.js';
// import GrommetLoginForm from 'reactor/GrommetLoginForm/GrommetLoginForm.js';

// import {SemanticAppMix} from 'reactor/mixins/SemanticAppMix.js';
// import SemanticLoginForm from 'reactor/SemanticLoginForm/SemanticLoginForm.js';

import {OnsenAppMix} from 'reactor/mixins/OnsenAppMix.js';
import OnsenLoginForm from 'reactor/OnsenLoginForm/OnsenLoginForm.js';

// Class
/*
class Reactor extends mix( Component )
  .with( SamsaraAppMix,
         GrommetAppMix ) {
*/

/*
class Reactor extends mix( Component )
  .with( SamsaraAppMix,
         SemanticAppMix ) {
*/

class Reactor extends mix( Component )
  .with( SamsaraAppMix,
         OnsenAppMix ) {


  constructor( props ) {
    super( props );
  }

  // componentWillMount() {
  //   let login = new GrommetLoginForm();
  //   this.mountComponent( login );
  // }

  // componentWillMount() {
  //   this.login = new SemanticLoginForm();
  //   this.mountComponent( this.login );
  // }

  componentWillMount() {
    this.login = new OnsenLoginForm();
    this.mountComponent( this.login );

    let component = new Component({
      align: [0.5,0.5],
      origin: [0.5,0.5],
      content: '<div style="background-color: red;">hello hello</div>'
     });
    // this.mountComponent( component );
  }

}

// Exports
export default Reactor;
