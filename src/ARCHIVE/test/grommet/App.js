
import 'grommet/grommet.min.css!';

import React from 'react';
// import GrommetApp from 'grommet/components/App';
// import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';

// import Article from 'grommet/components/Article';
// import Headline from 'grommet/components/Headline';
// import Section from 'grommet/components/Section';

// import { Provider } from 'react-redux';
// import store from './store';

const element = (
  <Box colorIndex='neutral-2'
    justify='center'
    align='center'
    pad='medium'>
    Box
  </Box>
);

/*
const __element = (
<GrommetApp inline={true} >
  <Split separator={false}>
    <Box colorIndex='neutral-1'
      justify='center'
      align='center'
      pad='medium'>
      Left Side
    </Box>
    <Box colorIndex='neutral-2'
      justify='center'
      align='center'
      pad='medium'>
      Right Side
    </Box>
  </Split>
</GrommetApp>

);

const element2 = (
  <Article scrollStep={true}
    controls={true}>
    <Section pad='large'
      justify='center'
      align='center'
      full='vertical'>
    </Section>
    <Section pad='large'
      justify='center'
      align='center'
      full='vertical'
      colorIndex='grey-4'>
      <Headline margin='none'>
        Section 2
      </Headline>
    </Section>
    <Section pad='large'
      justify='center'
      align='center'
      full='vertical'>
      <Headline margin='none'>
        Section 3
      </Headline>
    </Section>
    <Section pad='large'
      justify='center'
      align='center'
      full='vertical'
      colorIndex='grey-4'>
      <Headline margin='none'>
        Section 4
      </Headline>
    </Section>
    <Section pad='large'
      justify='center'
      align='center'
      full='vertical'>
      <Headline margin='none'>
        Section 5
      </Headline>
    </Section>
  </Article>
);
*/

export class App extends React.Component {
  render() {
    return element;
  }
}
