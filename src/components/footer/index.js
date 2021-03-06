import React from 'react';
import T from 'prop-types';
import styled from 'react-emotion';

import { Logo } from '../logo';
import { Facebook, Github, Twitter } from '../social';
import { FOOTER_BG_COLOR, FONT_FAMILY } from '../../style';

const Container = styled('footer')({
  display: 'flex',
  alignItems: 'center',
  boxSizing: 'border-box',
  justifyContent: 'space-between',
  fontFamily: FONT_FAMILY,
  backgroundColor: FOOTER_BG_COLOR,
  padding: '4rem 0.5rem',
  width: '100%',
  position: 'relative',
  '@media only screen and (min-width: 768px)': {
    padding: '4rem 2rem',
  },
  '::before': {
    content: JSON.stringify(''),
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    height: 6,
    backgroundColor: '#d8292f'
  }
});

const List = styled('ul')({
  margin: 0,
  padding: 0,
  whiteSpace: 'nowrap'
});

const ListItem = styled('li')({
  display: 'inline-block',
  listStyleType: 'none',
  marginRight: '0.5rem',
  textTransform: 'uppercase',
  fontSize: 12
});

const Link = styled('a')({
  color: '#CCC',
  textDecorationSkip: 'ink',
  padding: '0.5rem',
  transition: '175ms ease-in-out',
  '@media only screen and (min-width: 768px)': {
    padding: '0.5rem 1rem',
  },
  ':hover': {
    color: '#FFF',
    textDecoration: 'none'
  }
});

const StyledLogo = styled(Logo)({
  height: 20
});

const Social = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  bottom: '1rem',
  left: 0,
  right: 0
});

const SocialIcon = Icon => styled(Icon)({
  margin: 12
});

const defaultLinks = [
  {
    href: 'https://objectpartners.com/contact',
    label: 'Contact us'
  },
  {
    href: 'https://objectpartners.com/careers',
    label: 'Join us'
  }
];

export function Footer({ className, links }) {
  return (
    <Container className={className}>
      <StyledLogo />
      <List>
        {defaultLinks.concat(links).map(({ href, label }) => (
          <ListItem key={href}>
            <Link href={href}>{label}</Link>
          </ListItem>
        ))}
      </List>
      <Social>
        {
          [Facebook, Twitter, Github]
            .map((Icon, index) => (
              <Icon key={index} style={{ marginLeft: 18, marginRight: 18 }} />
            ))
        }
      </Social>
    </Container>
  );
}

Footer.propTypes = {
  className: T.string,
  links: T.arrayOf(
    T.shape({
      href: T.string.isRequired,
      label: T.string.isRequired
    })
  )
};

Footer.defaultProps = {
  links: []
};
