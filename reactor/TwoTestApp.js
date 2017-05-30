// https://two.js.org/#introduction
// ./jspm install two.js=github:jonobr1/two.js

// Style

// Imports
import Two from 'two.js';
console.log(Two);

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
  .with( SamsaraAppMix ) {

  constructor( props ) {
    props.classes = ['bg-blue'];
    super( props );
  }

  componentWillMount() {
  }

  componentDidMount(target) {
    let two = new Two({
      fullscreen: true,
      autostart: true,
      type: Two.Types.webgl
    }).appendTo(target);

    let circle = two.makeCircle(72, 100, 50);
    let rect = two.makeRectangle(213, 100, 100, 100);

    // The object returned has many stylable properties:
    circle.fill = '#FF8000';
    circle.stroke = 'orangered'; // Accepts all valid css color
    circle.linewidth = 5;

    rect.fill = 'rgb(0, 200, 255)';
    rect.opacity = 0.75;
    rect.noStroke();

    // Don't forget to tell two to render everything
    // to the screen
    two.update();
  }
} // class
