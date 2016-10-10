import React from 'react';
import MeteorLogo from './MeteorLogo';
import { Text, Appear } from 'spectacle';
import stargazers from './stargazers.jpg';

export const coverContent = ({ title = 'Main title' }) => [
  <MeteorLogo key="cover1" />,
  <Appear key="cover2"><Text>{title}</Text></Appear>,
];

export const coverProps = {
  bgImage: stargazers,
};
