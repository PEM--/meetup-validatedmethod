import React from 'react';
import { Deck, Spectacle, Slide } from 'spectacle';
import { theme, coverProps, coverContent, defaultSlideProps } from './theme';

import aboutMe from './slides/aboutMe';
import thankYou from './slides/thankYou';

const App = () => (
  <Spectacle theme={theme}>
    <Deck transition={['fade']} progress="pacman">
      <Slide {...coverProps}>{coverContent({ title: 'ValidatedMethod' })}</Slide>
      <Slide {...defaultSlideProps}>{aboutMe()}</Slide>
      <Slide {...defaultSlideProps}>{thankYou()}</Slide>
    </Deck>
  </Spectacle>
);

export default App;
