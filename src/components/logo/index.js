import React from 'react';
import T from 'prop-types';
import styled from 'react-emotion';

const Container = styled('div')({
  height: 40
});

const Svg = styled('svg')({
  height: '100%',
  width: '100%'
});

const THEME = {
  default: {
    accent: '#971B1E',
    base: '#E02926',
    secondary: '#BC2026',
    text: '#FFF'
  },
  dark: {
    accent: '#333',
    base: '#666',
    secondary: '#444',
    text: '#444'
  },
  light: {
    accent: '#CCC',
    base: '#EEE',
    secondary: '#CCC',
    text: '#FFF'
  }
};

export function Logo({ className, theme: definedTheme, textColor, style }) {
  const theme = THEME[definedTheme];
  return (
    <Container className={className} style={style}>
      <Svg viewBox="0 0 241.8 34.2" preserveAspectRatio="xMinYMin meet">
        <path
          className="swoop"
          fill={theme.accent}
          d="M10.8,25.8c1.7-0.3,3.4-0.9,4.9-1.9c2.4-1.5,4.3-3.9,5.3-6.6c0.4-1.1,0.7-2.3,0.8-3.4V13c0-0.3,0-0.6,0-0.9
          c0,2-0.6,4-1.6,5.8c-0.6,1-1.4,1.9-2.3,2.7c-2.8,2.3-6.5,3-9.9,2c-2.5-0.8-4.5-2.5-5.6-4.9C1,14.9,0.9,11.7,2,8.8
          c0.8-2,2.2-3.8,4.1-5v0c-3.2,1.5-5.4,4.5-6,7.9C-0.8,18,2.9,24.1,9,26.1c0.1,0,0.8-0.2,0.9-0.2C10.2,25.9,10.5,25.9,10.8,25.8z"
        />
        <path
          className="stem stem-top"
          fill={theme.base}
          d="M28,8.3c-0.8-4.7-4.8-8.2-9.6-8.3c-1,0-1.9,0.1-2.8,0.4c-0.9,0.3-1.7,0.7-2.5,1.2s-1.4,1.2-2,1.9
          C10.7,4,10.3,4.6,10,5.2l0,0L9.9,5.6v0.1V5.6L9.7,6v0.1l0,0L9.4,6.6V6.5C9.3,6.8,9.2,7.1,9.2,7.4l0,0L9,7.9c0,0.2-0.1,0.4-0.1,0.6
          v0.2c0,0,0.5-0.8,0.8-1.1c0.3-0.3,0.6-0.6,1-0.9c4.8-3.8,11.8-2.9,15.6,2c0.8,1.1,1.5,2.3,1.9,3.6v-1.1C28.2,10.2,28.2,9.2,28,8.3z
           M9.2,7.5L9.2,7.5L9.2,7.5z M9.5,6.5L9.5,6.5L9.5,6.5z M9.3,7L9.3,7L9.3,7z"
        />
        <path
          className="stem"
          fill={theme.base}
          d="M14.6,8.4c-2.3,0.1-4.4,1.3-5.6,3.2c0,0,0,0,0,0.1v22.4c0,0.1,0.1,0.1,0.1,0.1l0,0c2.3-0.1,4.4-1.3,5.6-3.2
          c0,0,0,0,0-0.1V8.6C14.7,8.5,14.6,8.4,14.6,8.4L14.6,8.4z"
        />
        <path
          className="text"
          fill={textColor || theme.text}
          d="M55.1,17.5c0,3.8-2.3,7.3-7.2,7.3s-7.3-3.6-7.3-7.3c-0.2-3.9,2.8-7.2,6.7-7.4c0.2,0,0.4,0,0.6,0
          C52.7,10.1,55.1,13.6,55.1,17.5z M47.8,22.7c3.5,0,5-2.5,5-5.2s-1.5-5.3-5-5.4c-3.3,0-5,2.3-5,5.4C42.9,20,44.3,22.7,47.8,22.7z
           M64.3,10.3c2.7,0,4.8,1.2,4.8,4c0,1.3-0.8,2.4-2,2.8c1.4,0.5,2.4,1.8,2.4,3.2c0,3.1-2.5,4-5.3,4h-6.4v-14H64.3z M60,16.2h4.3
          c1.7,0,2.6-0.7,2.6-1.8s-0.9-2-2.6-2H60V16.2z M60,22.4h4.2c1.2,0,3-0.4,3-2s-1.7-2.2-3-2.2H60V22.4z M83.5,10.3v8.3
          c0.2,3.2-2.2,5.9-5.3,6.1c-0.2,0-0.5,0-0.7,0c-3.5,0-6-2.2-6-6h2.1c0,2.5,1.3,3.9,3.8,3.9s3.8-1.7,3.8-4v-8.3H83.5z M97.3,24.5H86.9
          V10.3h10.4v2.2h-8.1v3.8H97v2.1h-7.8v3.8h8.2L97.3,24.5L97.3,24.5z M112.2,22.7c-1.4,1.4-3.3,2.1-5.3,2.1c-5.1,0-7.4-3.5-7.5-7.3
          c-0.2-3.9,2.8-7.2,6.7-7.4c0.2,0,0.5,0,0.7,0c1.9,0,3.8,0.8,5.2,2.1l-1.5,1.5c-1-0.9-2.3-1.5-3.7-1.5c-2.8-0.1-5.1,2-5.2,4.8
          c0,0.2,0,0.3,0,0.5c-0.2,2.7,1.9,5,4.6,5.2c0.2,0,0.4,0,0.6,0c1.4,0,2.7-0.6,3.8-1.5L112.2,22.7z M118.2,12.4h-4.6v-2h11.6v2h-4.6
          v12.1h-2.3L118.2,12.4L118.2,12.4z M133.9,20.1v4.4h-2.3V10.3h6.6c6.8,0,6.8,9.8,0,9.8H133.9z M133.9,18.1h4.3c3.7,0,3.7-5.7,0-5.7
          h-4.3V18.1z M154.5,21.5h-7.7l-1.3,3H143l6.4-14.1h2.5l6.4,14.1h-2.4L154.5,21.5z M150.6,12.7l-3,6.7h6L150.6,12.7z M172.5,24.5
          h-2.6l-4.3-4.9h-3v4.9h-2.3V10.3h6.6c2.5-0.2,4.8,1.7,5,4.2c0,0.1,0,0.3,0,0.4c0.1,2.3-1.6,4.2-3.8,4.4l4.2,4.7L172.5,24.5z
           M162.6,12.4v5.1h4.3c1.3,0.1,2.5-0.8,2.7-2.2c0-0.1,0-0.2,0-0.3c0.1-1.4-1-2.6-2.4-2.6c-0.1,0-0.2,0-0.3,0H162.6z M178.3,12.4h-4.7
          v-2h11.6v2h-4.6v12.1h-2.3V12.4z M197.2,20.4V10.3h2.3v14.1h-1.7l-8-10v10h-2.3V10.3h1.7L197.2,20.4z M213.6,24.5h-10.5V10.3h10.4
          v2.2h-8.1v3.8h7.8v2.1h-7.8v3.8h8.2L213.6,24.5L213.6,24.5z M228.6,24.5H226l-4.3-4.9h-3v4.9h-2.3V10.3h6.6c2.5-0.2,4.8,1.7,5,4.2
          c0,0.1,0,0.3,0,0.4c0.1,2.3-1.6,4.2-3.8,4.4l4.2,4.7L228.6,24.5z M218.7,12.4v5.1h4.3c1.3,0.1,2.5-0.8,2.7-2.2c0-0.1,0-0.2,0-0.4
          c0.1-1.4-1-2.6-2.4-2.6c-0.1,0-0.2,0-0.3,0L218.7,12.4z M239.5,13.5c-0.9-1-2.1-1.6-3.5-1.6c-1.9,0-3.3,0.8-3.3,2.1s1.6,1.8,3.4,2
          c2.9,0.4,5.7,1.2,5.7,4.4s-2.9,4.4-5.9,4.4c-2.7,0-4.8-0.8-6.1-3.2l1.7-1.1c0.9,1.5,2.6,2.4,4.4,2.3c1.7,0,3.6-0.6,3.6-2.4
          c0-1.5-1.6-2.1-3.6-2.3c-2.8-0.4-5.5-1.1-5.5-4.1s2.9-4.1,5.5-4.1c2,0,4.1,0.5,5.3,2.4L239.5,13.5z"
        />
        <path
          className="swoop swoop-right"
          fill={theme.secondary}
          d="M28.3,11.8v0.5C28.3,12.1,28.3,12,28.3,11.8z M28.2,12.4C28.2,12.4,28.2,12.3,28.2,12.4L28.2,12.4L28.2,12.4z"
        />
        <path
          className="swoop swoop-right"
          fill={theme.secondary}
          d="M17.6,4.4c-2.5,0-4.9,0.8-6.8,2.3C13,5.1,16,5,18.4,6.5c1.7,1,2.8,2.7,3.2,4.7c0.1,0.6,0.1,1.2,0.1,1.9V14
          c-0.3,4.1-2.6,7.8-6.1,10c-0.3,0.2-0.6,0.3-0.9,0.5v2.1c7.3-0.9,13-6.8,13.5-14.1v-0.1C26.9,7.6,22.5,4.3,17.6,4.4z"
        />
      </Svg>
    </Container>
  );
}

Logo.propTypes = {
  className: T.string,
  style: T.shape({}),
  theme: T.oneOf(['default', 'light', 'dark']),
  textColor: T.string
};

Logo.defaultProps = {
  theme: 'default'
};
