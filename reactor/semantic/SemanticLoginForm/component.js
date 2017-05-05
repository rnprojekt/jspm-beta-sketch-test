
// Style
// import './component.css!';

// React Components
import React from 'react';
import { Dropdown,
         Button,
         Form,
         Input,
         Message,
         Header,
         Image } from 'semantic-ui-react';

// Language
// import { I18nextProvider } from 'react-i18next';
import i18n from 'reactor/i18n';
// import { translate, Interpolate } from 'react-i18next';

console.log(i18n);

// Class
// @translate(['view', 'nav'], { wait: true })
class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading : false,
                   form : {},
                   success: false,
                   error: false };
  }

  render() {
    console.log(this.props);
    // const { t } = this.props;
    // <h1>{t('common:appName')}</h1>

    let element = (
      <I18nextProvider i18n={ i18n }>

      <Form loading={this.state.loading}
            error={this.state.error}
            onSubmit={ (proxy,event) => this.onSubmit(proxy,event) }
            style={{padding: '32px'}}>
        <Image centered src='images/logo.png' size='tiny' />
        <Header as='h1' textAlign='center'>
          {this.props.title}
        </Header>
        <Form.Input label='Username'
                    name='email'
                    placeholder='joe@schmoe.com'
                    onChange={ (proxy,event) => this.onChange(event) } />
        <Form.Input label='Password'
                    name='password'
                    placeholder='password'
                    type='password'
                    onChange={ (proxy,event) => this.onChange(event) } />
        <Message
          error
          header='Login Failed'
          content='Invalid username or password.'
        />
        <Button fluid positive>Sign in</Button>
        <div style={{padding: '16px', paddingTop: '32px', textAlign: 'center'}}>
        Don't have account ? <a onClick={(event,vars) => console.log(event,vars) }>Sign Up</a>
        </div>
      </Form>
      </I18nextProvider>
    );

    if(this.state.success) {
      element = (
        <Form success={this.state.success}
              style={{padding: '32px'}}>
        <Message
          success
          header='Login Success'
          content="You're all signed up for the newsletter"
        />
        </Form>
      );
    }

    return element;
  }

  onSubmit(proxy,event) {
    // event.preventDefault();
    proxy.preventDefault();
    console.debug('component.onSubmit', this.state.form);
    this.setState({loading: true});
    this.props.onSubmit(this.state.form, (err,res) => {
      if(err) {
        console.error('onSubmit finished error');
        this.setState({error: true, loading: false})
      } else {
        console.info('onSubmit finished');
        this.setState({loading: false, success : true});
      }
    });
  }

  onChange(event) {
    this.state.form[event.name] = event.value;
    // console.log('component.onChange', this.state.form);
  }
} // class

// console.log( translate(['common'], { withRef: true })(Component) );
// let Translated = translate(['common'], { wait: false, withRef: true })(Component);
// export default translate(['common'], { wait: false, withRef: true })(Component);
export default Component;
