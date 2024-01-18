import styled from 'styled-components';
import { Container, Typography } from '@mui/material';

export const FooterContainer = styled(Container)`
  background-color: var(--raisin-black);
  color: white;
  padding: 20px;
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 999;
  overflow: hidden; /* Add overflow property */
`;

export const FooterText = styled(Typography)`
  && {
    color: white;
  }
`;

export const FooterEmail = styled(Typography)`
  && {
    color: white;
    font-size: 14px; /* Adjust the font size if needed */
    margin-top: 5px; /* Add spacing between the copyright text and email */
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end; /* Align icons to the right */
`;

export const IconStyle = {
  color: 'white',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: 'var(--amaranth-purple)',
  },
};