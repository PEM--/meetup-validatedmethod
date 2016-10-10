import React from 'react';
import { Image, Heading, Text, List, ListItem, Link } from 'spectacle';
import 'font-awesome/css/font-awesome.css';
import Fontawesome from 'react-fontawesome';
import me from './pem.png';
import { colors } from '../theme';

const Contact = ({ name, href, children }) => (
  <ListItem>
    <Fontawesome
      style={{ color: colors.tertiary }}
      name={name}
    />
    <Link
      textColor={colors.secondary}
      style={{ marginLeft: '1em' }}
      href={href} target="_blank"
    >{children}</Link>
  </ListItem>
)

const aboutMe = () => [
  <Image
    key='aboutMe-0'
    style={{ borderRadius: '50%', border: `5px solid ${colors.tertiary}`, marginBottom: '2em' }}
    display="block"
    src={me}
  />,
  <Heading key='aboutMe-1' textSize="2em">PEM</Heading>,
  <Text key='aboutMe-2' fit>React + Meteor freelance developer</Text>,
  <List key='aboutMe-3'>
    <Contact name="twitter" href="https://twitter.com/PEM___">@PEM___</Contact>
    <Contact name="github" href="https://github.com/PEM--">PEM--</Contact>
    <Contact name="rss" href="http://pem-musing.blogspot.fr/">My blog</Contact>
  </List>
];

export default aboutMe;
