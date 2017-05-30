
import Samsara from 'samsara';
const Surface = Samsara.DOM.Surface;
const View = Samsara.Core.View;

export let CanvasMix = (superclass) => class extends superclass {
  constructor(props) {
    super(props);
  }

  initView() {
    // create template cache
    this._view = new View({
      size: this.props.size,
      origin: this.props.origin || [0,0]
    });

    this._surface = new Surface({
      tagName: 'canvas',
      classes: this.props.classes,
      origin: this.props.origin || [0,0],
      properties: this.props.properties || {},
      opacity: this.props.opacity ? this.props.opacity : 1
    });

    this._view.input.on('deploy', (target) => {
      // console.log('view deploy',target);
      this.componentDidMount(target);
    });

    // will mount
    this._view.subscribe(this._surface);
    // this._view.add({opacity: this.props.opacity ? this.props.opacity : 1 }).add( this._surface );
    this._view
      .add( { align: this.props.align || [0,0] } )
      .add( this._surface );

    this.componentWillMount();
  } // initView

};
