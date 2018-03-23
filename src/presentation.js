import React, { Component } from 'react';
import {
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Image,
  Appear,
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: '#eea849',
    secondary: '#335C4A',
    tertiary: '#ffffff',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['spin']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Higher Order Components?!?
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={2} bold>
            By: Shaun Lloyd
          </Text>
        </Slide>

        <Slide>
          <Image
            src="https://media.giphy.com/media/l0IylOPCNkiqOgMyA/source.gif"
            alt="Charlie Day GIF"
            width="80%"
          />
        </Slide>

        <Slide>
          <Image
            src="https://i.imgur.com/tDaMLnS.gif"
            alt="Captian Holt GIF"
            width="80%"
          />
        </Slide>

        <Slide transition={['spin']} bgColor="primary" textColor="tertiary">
          <Text textColor="tertiary" caps>
            but first, a refresher...
          </Text>
        </Slide>

        <Slide transition={['spin']} bgColor="primary" textColor="tertiary">
          <Heading textColor="secondary" caps>
            Higher Order Functions
          </Heading>
          <Appear order={1}>
            <Text margin="10px 0 0" size={4} textColor="tertiary">
              A function that does at least one of the following:
            </Text>
          </Appear>
            <List textColor="tertiary">
              <Appear order={2}>
                <ListItem>One or more function as arguments</ListItem>
              </Appear>
              <Appear order={3}>
                <ListItem>Returns a Function</ListItem>
              </Appear>
            </List>
        </Slide>

        {<CodeSlide
          lang="js"
          code={require('./code-examples/multiplyby.js').default}
          ranges={[
            { loc: [0,0], title: 'multiplyBy()' },
            { loc: [0,2] },
            { loc: [4,9] },
            { loc: [0,10], title: 'multiplyBy()' },
          ]}
        />}

        <Slide transition={['spin']}>
          <Heading textColor="secondary">Function Composition</Heading>
          <Appear order={1}>
            <Text margin="10px 0 0" size={4} textColor="tertiary">
              Taking two or more functions and combining them to create a new function.
            </Text>
          </Appear>
        </Slide>

        {<CodeSlide
          lang="js"
          code={require('./code-examples/combinefunctions.js').default}
          ranges={[
            { loc: [0,0], title: 'combineFunctions()' },
            { loc: [0,2] },
            { loc: [3,8] },
            { loc: [9,12] },
            { loc: [0,12], title: 'combineFunctions()' },
          ]}
        />}

        <Slide transition={['spin']} bgColor="primary">
          <Heading size={3} textColor="secondary">What is a Higher Order Component?</Heading>
          <Appear order={1}>
            <Text sixe={4} textColor="tertiary">
              A function that...
            </Text>
          </Appear>
          <List ordered textColor="tertiary">
            <Appear order={2}>
              <ListItem>Takes in a component</ListItem>
            </Appear>
            <Appear order={3}>
              <ListItem>Does something</ListItem>
            </Appear>
            <Appear order={4}>
              <ListItem>Returns a new component</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={['spin']} bgColor="primary">
          <Heading textColor="secondary">React + Redux</Heading>
        </Slide>

        {<CodeSlide
          lang="js"
          code={require('./code-examples/connect.js').default}
          textSize=".7em"
          ranges={[
            { loc: [0,0], title: 'react-redux connect()' },
            { loc: [0,5] },
            { loc: [6,28] },
            { loc: [29,46] },
            { loc: [47,50] },
            { loc: [51,59] },
            { loc: [60,64] },
            { loc: [65,69] },
          ]}
        />}

        <Slide>
          <Image
            src="https://i.imgur.com/DWrI2JY.gif"
            alt="mind blown"
            width="80%"
          />
        </Slide>

        <Slide transition={['spin']} bgColor="primary">
          <Heading textColor="secondary">Recompose</Heading>
          <Text textColor="tertiary">
            Collection of Utility functions for functional components
            and higher order components
          </Text>
        </Slide>

        {<CodeSlide
          lang="js"
          code={require('./code-examples/classexample.js').default}
          textSize=".7em"
          ranges={[
            { loc: [0,0], title: 'Class Component' },
            { loc: [0,2] },
            { loc: [3,4] },
            { loc: [4,33] },
            { loc: [34,46] },
            { loc: [47,51] },
            { loc: [52,63] },
            { loc: [63,70] },
            { loc: [66,67]}
          ]}
        />}

        {<CodeSlide
          lang="js"
          code={require('./code-examples/containerv1.js').default}
          textSize=".7em"
          ranges={[
            { loc: [0,0], title: 'Container' },
            { loc: [0,23] },
          ]}
        />}

        {<CodeSlide
          lang="js"
          code={require('./code-examples/functionalcomponent.js').default}
          textSize=".7em"
          ranges={[
            { loc: [0,0], title: 'Class to Functional Component' },
            { loc: [2,8] },
            { loc: [12,28] },
          ]}
        />}

        <Slide transition={['spin']} bgColor="primary">
          <Heading>withHandlers</Heading>
          <Text textColor="tertiary" size={4}>
            Takes a map of HOFs that take
            props and return handler Functions
            with access to the components props
          </Text>
        </Slide>

        {<CodeSlide
          lang="js"
          code={require('./code-examples/withHandlers.js').default}
          textSize=".7em"
          ranges={[
            { loc: [0,1], title: 'Container - withHandlers' },
            { loc: [20,28] },
            { loc: [29,33] }
          ]}
        />}

        {<CodeSlide
          lang="js"
          code={require('./code-examples/functionalwithhandlers.js').default}
          textSize=".7em"
          ranges={[
            { loc: [0,0], title: 'Stateless Component withHandlers' },
            { loc: [2,8] },
            { loc: [13,29] },
          ]}
        />}

        <Slide transition={['spin']} bgColor="primary">
          <Heading>compose</Heading>
        </Slide>

        {<CodeSlide
          lang="js"
          code={require('./code-examples/containerComplete.js').default}
          textSize=".7em"
          ranges={[
            { loc: [0,1], title: 'Composing HOCs' },
            { loc: [20, 31] },
            { loc: [21, 22] },
            { loc: [22, 30] },
            { loc: [30, 31] }
          ]}
        />}

        <Slide transition={['spin']} bgColor="primary">
          <Heading>Other functions</Heading>
          <List>
            <Appear order={1}>
              <ListItem>withState</ListItem>
            </Appear>
            <Appear order={2}>
              <ListItem>branch</ListItem>
            </Appear>
            <Appear order={3}>
              <ListItem>lifecycle</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide>
          <Heading>Q&A</Heading>
        </Slide>
      </Deck>
    );
  }
}
