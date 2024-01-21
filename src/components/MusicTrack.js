import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal, Button, Box, Typography, Paper, Link as MuiLink } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { useTrail ,useSpring, animated } from 'react-spring';

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
  background-color: #f0f0f0;
  color: black !important;
  margin-top: 10px !important;
  padding: 10px;
  font-size: 1.5em;
  font-weight: bold !important;
  text-align: center;
  width: 150px;
  text-decoration: none !important;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover, &:focus, &:active {
    text-decoration: none !important;
    background-color: var(--raisin-black) !important;
    color: white !important;
  }
`);

const InfoButton = styled(animated.button)`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: var(--raisin-black);
  color: white;
  border: none;
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled(Paper)`
  padding: 20px;
  max-width: 500px;
`;

const MusicTrack = ({ track }) => {
  const [hover, setHover] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [showInfoButton, setShowInfoButton] = useState(false);

  const infoButtonSpring = useSpring({ 
    opacity: showInfoButton ? 1 : 0,
    transform: showInfoButton ? 'translateX(0px)' : 'translateX(100px)'
  });

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
    <TrackContainer 
      onMouseEnter={() => { setHover(true); setShowInfoButton(true); }} 
      onMouseLeave={() => { setHover(false); setShowInfoButton(false); }}
    >
      <Paper className='track-container-paper'>
        <img src={track.image} alt={track.title} className="track-image" />
        <TrackInfoOverlay>
          {trail.map((animation, index) => {
            const [service, url] = links[index];
            return (
              <AnimatedLink
                key={service}
                style={{ ...animation, delay: index * 200 }}
                href={url.startsWith("http://") || url.startsWith("https://") ? url : `http://${url}`}
                target="_blank"
              >
                {service.toUpperCase()}
              </AnimatedLink>
            );
          })}
        </TrackInfoOverlay>
        <InfoButton style={infoButtonSpring} onClick={() => setModalOpen(true)}>
          <InfoIcon />
        </InfoButton>
      </Paper>

      <StyledModal open={isModalOpen} onClose={() => setModalOpen(false)}>
        <ModalContent>
          <Typography>{track.description}</Typography>
        </ModalContent>
      </StyledModal>
    </TrackContainer>
  );
};

export default MusicTrack;
