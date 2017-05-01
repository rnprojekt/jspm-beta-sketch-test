
// import './component.css!';

// import LoginForm from 'grommet/components/LoginForm';
// import Anchor from 'grommet/components/Anchor';

import {Dropdown} from 'semantic-ui-react'; // '/dist/es/modules/Dropdown';
import { Button, Form, Input, Message } from 'semantic-ui-react';

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
      <Form success loading={isLoading}
                    onSubmit={ (event,vars) => this.onSubmit(event,vars) }>
        <Form.Input label='Email'
                    name='email'
                    placeholder='joe@schmoe.com'
                    onChange={ (event,vars) => this.onChange(event,vars) } />
        <Form.Input label='Password'
                    name='password'
                    placeholder='password'
                    onChange={ (event,vars) => this.onChange(event,vars) } />
        <Form.Input label='Password2'
                    name='password2'
                    placeholder='password2'
                    onChange={ (event,vars) => this.onChange(event,vars) } />
        <Message
          success
          header='Form Completed'
          content="You're all signed up for the newsletter"
        />
        <Button>Submit</Button>
      </Form>
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
