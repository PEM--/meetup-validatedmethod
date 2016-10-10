import React from 'react';
import { Deck, Spectacle, Slide } from 'spectacle';
import { theme, coverProps, coverContent, defaultSlideProps } from './theme';

import aboutMe from './slides/aboutMe';

const App = () => (
  <Spectacle theme={theme}>
    <Deck transition={['fade']} progress="pacman">
      <Slide {...coverProps}>{coverContent({ title: 'ValidatedMethod' })}</Slide>
      <Slide {...defaultSlideProps}>{aboutMe()}</Slide>
    </Deck>
  </Spectacle>
);

export default App;
