import React from 'react';
import { Image, Text, List, ListItem, Link } from 'spectacle';
import 'font-awesome/css/font-awesome.css';
import Fontawesome from 'react-fontawesome';
import me from './pem.png';

const Contact = ({ name, href, children }) => (
  <ListItem>
    <Fontawesome name={name} />
    <Link
      style={{ marginLeft: '1em' }}
      href={href} target="_blank"
    >{children}</Link>
  </ListItem>
)

const aboutMe = () => [
  <Image
    key='aboutMe-0'
    style={{ borderRadius: '50%', border: '5px solid white', marginBottom: '2em' }}
    display="block"
    src={me}
  />,
  <Text key='aboutMe-1'>Pierre-Eric Marchandet</Text>,
  <Text key='aboutMe-2' fit>React + Meteor freelance developper</Text>,
  <List key='aboutMe-3'>
    <Contact name="twitter" href="https://twitter.com/PEM___">@PEM___</Contact>
    <Contact name="github" href="https://github.com/PEM--">PEM--</Contact>
    <Contact name="rss" href="http://pem-musing.blogspot.fr/">My blog</Contact>
  </List>
];

export default aboutMe;
