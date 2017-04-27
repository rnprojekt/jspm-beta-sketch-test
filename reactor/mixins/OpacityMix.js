
import Samsara from 'samsara';
const Transitionable = Samsara.Core.Transitionable;

export let OpacityMix = (superclass) => class extends superclass {
  constructor(props) {
    props.opacity = new Transitionable(0);
    super(props);
    // this.props.opacity = new Transitionable(0);
  }

  show(transition = {duration : 500}, callback = null ) {
    // this.isDeployed.then( () => {
      this.props.opacity.set(1, transition, callback );
    // });
  }

  hide(transition = {duration : 500}, callback = null ) {
    // this.isDeployed.then( () => {
      this.props.opacity.set(0, transition, callback );
    // });
  }

  showTimeout( transition = { timeout: 1000, duration : 500}, callback = null ) {
    setTimeout( () => { this.show(transition, callback); }, transition.timeout );
  }

  hideTimeout( transition = {timeout: 1000,  duration : 500}, callback = null ) {
    setTimeout( () => { this.hide(transition, callback); }, transition.timeout );
  }

};
