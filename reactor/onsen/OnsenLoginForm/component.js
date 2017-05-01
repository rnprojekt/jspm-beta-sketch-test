
import ons from 'onsenui';

import {
  Page,
  Tabbar,
  Tab,
  Navigator,
  Button,
  Toolbar,
  ToolbarButton,
  BackButton,
  Icon
} from 'react-onsenui';


import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let element = (
      <Page renderToolbar={() =>
        <Toolbar>
          <div className="left">
            <BackButton>Back</BackButton>
          </div>
          <div className="center">Title</div>
          <div className="right">
            <ToolbarButton>
              <Icon icon="md-menu" />
            </ToolbarButton>
          </div>
        </Toolbar> }
      >
        <Button onClick={this.handleClick}>Tap me!</Button>
      </Page>
    );
    return element;
  }

  handleClick(event) {
    console.log(event);
  }

  onSubmit(event) {
    console.log('component.onSubmit', event);
  }
}
