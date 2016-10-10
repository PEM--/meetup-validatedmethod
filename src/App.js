import React from 'react';
import {
  Deck, Spectacle, Slide, Text
} from 'spectacle';

import {
  theme,
  coverProps,
  coverContent,
  defaultSlideProps,
} from './theme';

const App = () => (
  <Spectacle theme={theme}>
    <Deck transition={['fade']} progress="pacman">
      <Slide {...coverProps}>{coverContent({})}</Slide>
      <Slide {...defaultSlideProps}>
        <Text>2nd slide</Text>
      </Slide>
    </Deck>
  </Spectacle>
);

export default App;
