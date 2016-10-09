import React from 'react';
import {
  Deck, Spectacle, Slide, Text
} from 'spectacle';

import { primary, secondary } from './styles/colors';
import createTheme from "spectacle/lib/themes/default";
const theme = createTheme({
  primary,
  secondary,
}, {
  primary: '-apple-system, Helvetica, Rototo, Arial, sans-serif'
});

console.log('theme', theme);

const App = () => (
  <Spectacle theme={theme}>
    <Deck transition={['fade']} progress="pacman">
      <Slide bgImage="img/stargazers.jpg">
        <Text>1st slide</Text>
      </Slide>
      <Slide>
        <Text>2nd slide</Text>
      </Slide>
    </Deck>
  </Spectacle>
);

export default App;
