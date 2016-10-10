import React from 'react';
import MeteorLogo from './MeteorLogo';
import { Appear, Heading } from 'spectacle';
import stargazers from './stargazers.jpg';

export const coverContent = ({ meetup = 'Meetup Meteor Paris', title = 'Main title' }) => [
  <MeteorLogo key="cover1" />,
  <Appear key="cover2">
    <Heading fit caps>{meetup}</Heading>
  </Appear>,
  <Appear key="cover3">
    <Heading fit>{title}</Heading>
  </Appear>,
];

export const coverProps = {
  bgImage: stargazers,
};
