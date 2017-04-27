
import Samsara from 'samsara';
const Context = Samsara.DOM.Context;
// const Surface = Samsara.DOM.Surface;
// const View = Samsara.Core.View;

export let SamsaraContextMix = (superclass) => class extends superclass {

  constructor(props) {
    super(props);
  }

  initContext( container = document.body ) {
    this._context = new Context();
    this._context.on('resize', (size) => {
      // this.emit('resize',size);
      // console.log('resize',size);
    });
    this._context.on( 'deploy', (target) => {
      this._target = target;
      // console.log('target',target);
      // did mount
    });
    this._context.mount(container);
    // FastClick.attach(document.body);
  } // initContext

};
