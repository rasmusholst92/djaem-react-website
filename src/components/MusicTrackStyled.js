import styled from 'styled-components';
import { Modal, Box, Typography, Paper, Link as MuiLink } from '@mui/material';
import { animated } from 'react-spring';

export const TrackContainer = styled.div`
  margin: 1rem;
  position: relative;
  cursor: pointer;
  overflow: hidden;

  .track-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%) contrast(120%);
    transition: filter 0.3s ease;
  }

  &:hover .track-image {
    filter: grayscale(0%);
  }
`;

export const TrackInfoOverlay = styled(Box)`
  position: absolute;
  bottom: 10px;
  left: 10px;
  width: calc(100% - 20px);
`;

export const TrackTitle = styled(Typography).attrs({ variant: 'h5' })`
  font-weight: bold;
  margin-bottom: 10px;
`;

export const AnimatedLink = animated(styled(MuiLink)`
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

export const InfoButton = styled(animated.button)`
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
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    color: var(--raisin-black);
    background-color: white;
  }
`;

export const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled(Paper)`
  padding: 20px;
  max-width: 500px;
`;