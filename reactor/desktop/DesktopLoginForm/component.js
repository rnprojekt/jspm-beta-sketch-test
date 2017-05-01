
// import './component.css!';

import { Box, Text } from 'react-desktop/macOs';

import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading : false, form : {} };
  }

  render() {
    // let element = (
    //   <div style={{backgroundColor: 'blue'}}>
    //   hello
    //   </div>
    // );

    const isLoading = this.state.isLoading;

    let element = (
      <Box label="Box" padding="10px 30px">
        <Text>Some text...</Text>
      </Box>
    )
    return element;
  }

  onSubmit(event,vars) {
    event.preventDefault()
    // console.log('component.onSubmit', event, vars);
    console.debug('component.onSubmit', this.state.form);
  }

  onChange(event,vars) {
    this.state.form[vars.name] = vars.value;
    console.log('component.onChange', this.state.form);
  }

}
