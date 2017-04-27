
// Style
import 'colors.css/css/colors.css!';
import 'samsara/dist/samsara.css!';
import 'style/samsara.css!';
import 'grommet/grommet.min.css!';

// Imports
import _ from 'underscore';
const extend = _.extend;
const clone = _.clone;

import {mix} from 'mixwith';
import {SamsaraContextMix} from 'reactor/mixins/SamsaraContextMix.js';
import Component from 'reactor/Component.js';

import LoginForm from 'reactor/LoginForm/LoginForm.js';

const defaultProps = {
  size: [undefined, undefined],
  classes: ['bg-yellow', 'navy'],
  content: "<middle>Reactor</middle>"
};

class Reactor extends mix(Component).with( SamsaraContextMix ) {
  constructor(props = {}) {
    super( extend( clone( Reactor.defaultProps ), props ) );
    this.initContext(props.container);
    this.initView();
    this._context.add(this._view);
  }

  componentWillMount() {
    let comp = new LoginForm();
    this._view.add({align: comp.props.align || [0,0]}).add(comp._view);
    // comp.render();
  }

} // class

// Export
Reactor.defaultProps = defaultProps;
export default Reactor;




// let content = React.createElement( HelloWorld, {onChange: this.onChange} );
// let content = React.createElement( LoginForm, {onChange: this.onChange} );
// let container = this.getTarget();
// let component = ReactDOM.render(content, container);

/*
// External
import {extend,clone} from 'underscore';
import async from 'async';
import {FastClick} from 'fastclick';
import WebFont from 'webfontloader';

// Internal
import {mix} from 'mixwith';
import {OptionMix} from 'reactor2/core/OptionMix';
import {StorageMix} from 'reactor2/core/StorageMix';
import {EventMix} from 'reactor2/core/EventMix';
import {StateMix} from 'reactor2/core/StateMix';
import {RouteMix} from 'reactor2/core/RouteMix';
import {i18NextMix} from 'reactor2/core/i18NextMix';

// Samsara
import Samsara from 'samsara';
const Context = Samsara.DOM.Context;

// Defaults
let DEFAULTS = {
  id: 'reactor2/ReactorApp'
};

export default class extends mix(Object).with( OptionMix,
                                               StorageMix,
                                               StateMix,
                                               EventMix,
                                               RouteMix,
                                               i18NextMix ) {

  constructor( options = {} ) {
    super( extend( clone( DEFAULTS ), options ) );

    this.components = {};

    // init states
    this.initState({
      "frontend": {
        _onEnter: () => this.onFrontend()
      }
    });
  } // constructor

  onInit() {
    this._globalStorage.set('debug',true);
    // init events
    this.initEvent();
    this.transition('frontend');
  }

  initEvent() {
    this.onDispatch('resize', (size) => {
      // console.log('resize:', size );
    });
  }

  // Samsara
  addSurfaceToContext( surface ) {
    this._context
      .add(surface);
  }

  // component._options.align
  addComponentToContext(component) {
    // console.log('addComponentToContext:, component._options);
    this._context
      .add({align: component._options.align })
      .add(component._view);
    return component;
  }

  // Framer alias
  addChild(component) {
    this.components[component.id()] = component;
    return this.addComponentToContext(component);
  }

  // Frontend
  // with page calls
  initFrontend( callback ) {
    return callback(null, true);
  }

  initAssets( callback ) {
    return callback(null, true);
  }

  initRouter( callback ) {
    // default route
    this._route('/', () => {
      this.onDefaultRoute();
    });

    this._route('*', () => {
      this.onPageNotFound();
    });

    return callback(null, true);
  }

  initContext( callback ) {
    this._context = new Context();
    this._context.on('resize', (size) => {
      this.emit('resize',size);
    });

    return callback(null, true);
  } // initContext

  initWebFonts( callback ) {
    // https://github.com/typekit/webfontloader
    WebFont.load({
      loading: () => {},
      active: () => { return callback(null, true); },
      inactive: () => { return callback( true, null ); },
      timeout: 2000,
      google: {
        families: ['Droid Sans', 'Droid Serif']
      }
    });
  } // initWebFonts

  onFrontend() {
    async.series({
      // initWebFonts: (callback) => this.initWebFonts(callback),
      initAssets: (callback) => this.initAssets(callback),
      initContext: (callback) => this.initContext(callback),
      initFrontend: (callback) => this.initFrontend(callback),
      mountContext: (callback) => {
        this._context.mount(document.body);
        FastClick.attach(document.body);
        callback(null, true);
      },
      initRouter: (callback) => this.initRouter(callback),
    }, (err, results) => {
      if(err) {
        console.error(err);
      }
      else {
        // console.info(results);
        this._route();
      }
    });
  } // onFrontend

} // class
*/
