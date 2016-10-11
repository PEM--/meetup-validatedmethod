import React from 'react';
import { Heading, List, ListItem, Link, Appear, Text } from 'spectacle';
import "font-awesome/css/font-awesome.css";
import Fontawesome from 'react-fontawesome';
import { colors } from '../theme';
import packageDef from '../../package.json';

const ListLink = ({ href, children }) => (
  <ListItem>
    <Link href={href} target="_blank" textColor={colors.secondary}>{children}</Link>
  </ListItem>
);

const githubUrl = (name) => `https://github.com/PEM--/${name}`;

const thankYou = () => [
  <Heading key='thankYou-1' caps>Thank you!</Heading>,
  <Appear key='thankYou-2'>
    <List key='thankYou-2'>
      <ListLink href={packageDef.homepage}>This presentation&nbsp;
        <small>({packageDef.homepage})</small>
      </ListLink>
      <ListLink href={githubUrl(packageDef.name)}>Its source code&nbsp;
        <small>({githubUrl(packageDef.name)})</small>
      </ListLink>
    </List>
  </Appear>,
  <Appear key='thankYou-3'>
    <Text textColor={colors.tertiary} margin="0 0 2em 0">You&apos;ve questions?</Text>
  </Appear>,
  <Appear key='thankYou-4'>
    <Text>
      If you liked it, don&apos;t forget to star&nbsp;
      <Fontawesome name="star" style={{ color: "#ffcf00" }} />
    </Text>
  </Appear>,
];

export default thankYou;
