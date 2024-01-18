import React, { useState } from 'react';
import styled from 'styled-components';
import { Box, Typography, Paper, Link as MuiLink } from '@mui/material';
import { useTrail, animated } from 'react-spring';

const TrackContainer = styled.div`
  margin: 1rem;
  position: relative;
  cursor: pointer;
  overflow: hidden;

  .track-image {
    width: 100%;
    filter: grayscale(100%);
    transition: filter 0.3s ease;
  }

  &:hover .track-image {
    filter: grayscale(0%);
  }
`;

const TrackInfoOverlay = styled(Box)`
  position: absolute;
  bottom: 10px;
  left: 10px;
  width: calc(100% - 20px);
`;

const TrackTitle = styled(Typography).attrs({ variant: 'h5' })`
  font-weight: bold;
  margin-bottom: 10px;
`;

const AnimatedLink = animated(styled(MuiLink)`
  display: block;
  background-color: #f0f0f0; // Default background color
  color: black !important;
  margin-top: 10px !important;
  padding: 10px;
  font-size: 1.5em;
  font-weight: bold !important;
  text-align: center;
  width: 150px;
  text-decoration: none !important;
  transition: background-color 0.3s ease, color 0.3s ease; // Combined transition

  &:hover, &:focus, &:active {
    text-decoration: none !important;
    background-color: var(--raisin-black) !important; // New background color on hover, focus, and active
    color: white !important; // Text color change on hover, focus, and active
  }
`);




const MusicTrack = ({ track }) => {
  const [hover, setHover] = useState(false);
  const parseUrls = (urlString) => {
    try {
      return JSON.parse(urlString);
    } catch (e) {
      console.error("Error parsing URLs", e);
      return {};
    }
  };

  const links = Object.entries(parseUrls(track.urls));
  const trail = useTrail(links.length, {
    opacity: hover ? 1 : 0,
    transform: hover ? 'translateX(0px)' : 'translateX(-100px)',
    config: { mass: 5, tension: 2000, friction: 200 },
    delay: 200,
    from: { opacity: 0, transform: 'translateX(-0px)' },
  });

return (
  <TrackContainer onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
    <Paper className='track-container-paper'>
      <img src={track.image} alt={track.title} className="track-image" />
      <TrackInfoOverlay>
        {trail.map((animation, index) => {
          const [service, url] = links[index];
          return (
            <AnimatedLink
              key={service}
              style={{
                ...animation,
                delay: index * 200
              }}
              href={
                url.startsWith("http://") || url.startsWith("https://")
                  ? url
                  : `http://${url}`
              }
              target="_blank"
            >
              {service.toUpperCase()}
            </AnimatedLink>
          );
        })}
      </TrackInfoOverlay>
    </Paper>
  </TrackContainer>
);
      };

export default MusicTrack;
