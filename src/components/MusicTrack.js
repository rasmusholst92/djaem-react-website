import React, { useState } from 'react';
import {
  TrackContainer,
  TrackInfoOverlay,
  AnimatedLink,
  InfoButton,
  StyledModal,
  ModalContent
} from './MusicTrackStyled';
import { Typography, Paper } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { useTrail, useSpring } from 'react-spring';
import parse from 'html-react-parser';

const parseUrls = (urlString) => {
  if (typeof urlString === 'string') {
    try {
      return JSON.parse(urlString);
    } catch (e) {
      console.error("Error parsing URLs", e);
      return {};
    }
  }
  return urlString;
};


const MusicTrack = ({ track }) => {
  const trackDescription = parse(track.description);
  const [state, setState] = useState({
    hover: false,
    isModalOpen: false,
    showInfoButton: false
  });

  const { hover, isModalOpen, showInfoButton } = state;

  const infoButtonSpring = useSpring({
    opacity: showInfoButton ? 1 : 0,
    transform: showInfoButton ? 'translateX(0px)' : 'translateX(100px)',
  });

  const links = Object.entries(parseUrls(track.urls));

  const trail = useTrail(links.length, {
    opacity: hover ? 1 : 0,
    transform: hover ? 'translateX(0px)' : 'translateX(-100px)',
    config: { mass: 5, tension: 2000, friction: 200 },
    delay: 200,
    from: { opacity: 0, transform: 'translateX(-100px)' },
  });

  const handleMouse = (enter) => setState(prevState => ({
    ...prevState,
    hover: enter,
    showInfoButton: enter
  }));

  const handleCloseModal = () => {
    setState({ 
      ...state, 
      isModalOpen: false,
      hover: false,
      showInfoButton: false
    });
  };
  
  return (
    <TrackContainer
      onMouseEnter={() => handleMouse(true)}
      onMouseLeave={() => handleMouse(false)}
    >
      <Paper className='track-container-paper'>
        <img src={track.image} alt={track.title} className="track-image" />
        <TrackInfoOverlay>
          {trail.map((animation, index) => {
            const [service, url] = links[index];
            return (
              <AnimatedLink
                key={service}
                style={animation}
                href={url.startsWith("http://") || url.startsWith("https://") ? url : `http://${url}`}
                target="_blank"
              >
                {service.toUpperCase()}
              </AnimatedLink>
            );
          })}
        </TrackInfoOverlay>
        <InfoButton style={infoButtonSpring} onClick={() => setState({ ...state, isModalOpen: true })}>
          <InfoIcon />
        </InfoButton>
      </Paper>

      <StyledModal open={isModalOpen} onClose={handleCloseModal}>
        <ModalContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}>{trackDescription}</Typography>
        </ModalContent>
      </StyledModal>
    </TrackContainer>
  );
};

export default MusicTrack;
