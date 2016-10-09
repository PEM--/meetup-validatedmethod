import React from 'react';
import {
  Deck, Spectacle, Slide, Text
} from 'spectacle';

import MeteorLogo from './ui/MeteorLogo/MeteorLogo';
import { theme } from './theme';

const App = () => (
  <Spectacle theme={theme}>
    <Deck transition={['fade']} progress="pacman">
      <Slide bgImage="img/stargazers.jpg" bgColor="black" textColor="white">
        <MeteorLogo />
        <Text>1st slide</Text>
      </Slide>
      <Slide>
        <Text>2nd slide</Text>
      </Slide>
    </Deck>
  </Spectacle>
);

export default App;
