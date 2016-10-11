import React from 'react';
import { Heading, Image } from 'spectacle';
import img from './optimistic-ui-latency-compensation.png'

const whatIsAMethod = () => [
  <Heading key='whatIsAMethod-1' fit caps>What is a method?</Heading>,
  <Image key='whatIsAMethod-2' src={img} />,
];

export default whatIsAMethod;
