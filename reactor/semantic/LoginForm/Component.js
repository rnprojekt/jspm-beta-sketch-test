
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

// Class
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading : false,
                   form : {username: "", password: ""},
                   success: false,
                   error: false };
  }

  onChange(event) {
    this.state.form[event.name] = event.value;
  }

  onSubmit(proxy,event) {
    proxy.preventDefault();
    console.debug('component.onSubmit', this.state.form);

    if( this.state.form.username == "" ) {
      return this.setState({error: true, loading: false});
    }

    this.setState({loading: true});

    this.props.onSubmit( this.state.form, (err,res) => {
      if(err) {
        console.error('onSubmit finished error');
        this.setState({error: true, loading: false});
      } else {
        console.info('onSubmit finished', this.props.store.getState());
        this.setState({loading: false, success : true});
      }
    });
  } // onSubmit

  render() {
    console.log('props:',this.props);

    let element = (
      <Form loading={this.state.loading}
            error={this.state.error}
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

    if(this.state.success) {
      element = (
        <Form success={this.state.success}
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
