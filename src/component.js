// component.js
/*
import React from 'react';
export class HelloWorld extends React.Component {
  render() {
    return React.createElement('h1', null, 'Hello Moon');
  }
}
*/

import 'grommet/grommet.min.css!';

import CheckBox from 'grommet/components/CheckBox';
import React from 'react';


export class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    let element = (
      <div>
      <CheckBox label='Sample label'
      toggle={true}
      disabled={false}
      reverse={false}
      onChange={this.props.onChange} />
      </div>
    );
    return element;
  }

  onChange() {
    console.log('hello');
  }
}
