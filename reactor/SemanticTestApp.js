// Style

// Imports

// Mixins
import {mix} from 'mixwith';
import {SamsaraAppMix} from 'reactor/mixins/SamsaraAppMix.js';

// Components
import Component from 'reactor/Component.js';

// Applications
import {SemanticAppMix} from 'reactor/mixins/SemanticAppMix.js';
import SemanticLoginForm from 'reactor/semantic/LoginForm/LoginForm.js';
import SemanticHeaderMenu from 'reactor/semantic/HeaderMenu/HeaderMenu.js';

// State
// https://www.smashingmagazine.com/2016/06/an-introduction-to-redux/

// https://designmodo.com/free-javascript-plugins/
// https://github.com/selz/plyr
// http://market.designmodo.com/pin-ui/

// Reducer
const auth = function(state = {status: 'logged out', value: 'guest'}, action) {
  switch (action.type) {
    case 'LOGIN':
      // console.log('LOGIN');
      return Object.assign({}, state, {
        status: 'logged in',
        value: action.value
      })
    case 'LOGOUT':
      return Object.assign({}, state, {
        status: 'logged out',
        value: action.value
      })
    default:
      return state;
  }
}

// Store
import Redux from 'redux';
const { createStore } = Redux;
const store = createStore(auth);

// Class
export default class extends mix( Component )
  .with( SamsaraAppMix,
         SemanticAppMix ) {

  constructor( props ) {
    props.classes = ['bg-blue', 'gradient'];
    props.store = store;
    super( props );
  }

  componentWillMount() {
    let menu = new SemanticHeaderMenu({
      store: store,
    });
    this.mountComponent( menu );

    let login = new SemanticLoginForm({
      store: store,
      apiUrl: 'https://localhost:8087/auth'
    });
    this.mountComponent( login );
  }
} // class
