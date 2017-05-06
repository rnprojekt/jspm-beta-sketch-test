
// Style
import './Component.css!';

// React Components
import React from 'react';
import { Dropdown,
         Button,
         Form,
         Input,
         Message,
         Header,
         Image } from 'semantic-ui-react';

const LOADING = {state: 'loading'};
const ERROR = {state: 'error'};
const SUCCESS = {state: 'success'};

// Class
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state: 'init',
      form: {
        username: "",
        password: ""
      }
    }

    /*
    {
      loading : false,
      success: false,
      error: false
    };
    */
  }

  onChange(event) {
    this.state.form[event.name] = event.value;
  }

  onSubmit(proxy,event) {
    proxy.preventDefault();
    // Debug user input
    // console.debug('component.onSubmit', this.state.form);

    // Sanit user input
    if( this.state.form.username == "" ) {
      return this.setState( ERROR );
    }

    // Loading
    this.setState( LOADING );

    // Submit call parent
    this.props.onSubmit( this.state.form, (err,res) => this.onSubmitDone(err,res) );
  } // onSubmit

  onSubmitDone(err,res) {
    if(err) {
      console.error('onSubmit finished error');
      this.setState( ERROR );
    } else {
      console.info('onSubmit finished', this.props.store.getState());
      this.setState( SUCCESS );
    }
  }

  render() {
    console.log('props:',this.props);
    const isLoading = this.state.state == 'loading' ? true : false;
    const isError = this.state.state == 'error' ? true : false;
    const isSuccess = this.state.state == 'success' ? true : false;

    let element = (
      <Form loading={isLoading}
            error={isError}
            onSubmit={ (proxy,event) => this.onSubmit(proxy,event) }
            style={{padding: '32px'}}>

        <Image centered
               src='images/logo.png'
               size='tiny' />

        <Header as='h1'
                textAlign='center'>
          {this.props.title}
        </Header>

        <Form.Input label='Username'
                    name='username'
                    placeholder='joe@schmoe.com'
                    onChange={ (proxy,event) => this.onChange(event) } />

        <Form.Input label='Password'
                    name='password'
                    placeholder='password'
                    type='password'
                    onChange={ (proxy,event) => this.onChange(event) } />

        <Message error
                 header='Login Failed'
                 content='Invalid username or password.' />

        <Button fluid positive>Sign in</Button>

        <div style={{padding: '16px', paddingTop: '32px', textAlign: 'center'}}>
        Don't have account ? <a onClick={(event,vars) => console.log(event,vars) }>Sign Up</a>
        </div>

      </Form>
    );

    if(isSuccess) {
      element = (
        <Form success={isSuccess}
              style={{padding: '32px'}}>

        <Message success
                 header='Login Success'
                 content="You're all signed up for the newsletter" />

        </Form>
      );
    }

    return element;
  } // render

} // class
