import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  Deck, Spectacle, Slide, Text
} from 'spectacle';

const App = () => (
  <Spectacle>
    <Deck>
      <Slide>
        <Text>Hello</Text>
      </Slide>
    </Deck>
  </Spectacle>
);

export default App;
