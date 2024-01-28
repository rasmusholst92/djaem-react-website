import React from 'react';
import { Box, Paper, Typography, useTheme, useMediaQuery } from '@mui/material';
import styled from 'styled-components';

const MainSection = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  position: 'relative',
  overflow: 'hidden',
});

const ImageContainer = styled('img')({
  maxWidth: '40%',
  height: 'auto',
  position: 'relative',
});

const TextCard = styled(Paper)({
  marginLeft: '-5%',
  padding: '20px',
  width: '30%',
  backgroundColor: '#fff',
  position: 'relative',
  zIndex: 1,
});

const StyledTypography = styled(Typography)({
  letterSpacing: '0.1em', // Adjust letter-spacing as needed
  lineHeight: '1.6', // Proper line height for better readability
  textAlign: 'justify', // Justify the text for a clean look
  marginBottom: '1em', // Add some space after paragraphs
  color: '#333', // A softer color than black for the text
  fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif", // A common font stack
  fontWeight: 400, // Normal font weight; adjust as needed
  fontStyle: 'italic'
});

const OmText = styled.h2({
  position: 'absolute',
  top: '-18px',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 2,
  padding: '0 10px',
  color: 'white',
  fontSize: '3.5em',
  fontStyle: 'italic',
  textAlign: 'center',
  margin: 0,
  fontWeight: 'bold',
});

// Main About Section component
const AboutSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <MainSection>
      <ImageContainer src="http://djaem.dk/Billeder/Paa_Vej.png" alt="DJÆM Image" style={{ maxWidth: isMobile ? '80%' : '40%' }} />
      <TextCard elevation={3} style={{ width: isMobile ? '80%' : '30%', marginLeft: isMobile ? '0' : '-5%' }}>
        <OmText>OM</OmText>
        <StyledTypography variant="body1">
          <b>DJAEM</b> er en musikfælleskab bestående af Emma Jarl og Jan Andersen. Far og datter. Navnet er sammensat af JA (Jan) og EM (Emma) og D-et tilskrives min ældste datter, som hedder Dina. Hun er med på sidelinjen, med gode råd og kritisk stillingtagen. Så det er lidt af et familieforetagende 😊
          <br /> <br />
          <b>DJAEM</b> er samtidig et lille hjemme lydstudie med alt relevant udstyr. Klaver, guitarer, mikrofoner, controllere etc., samt en masse computere og software. 
          <br /> <br />
          <b>Vi</b> laver alting selv. Tekster, musik, indspilning, mixning, mastering og distribution. Vores musik udkommer på ca. 15 forskellige platforme, men de mest brugte er Spotify, Apple Music, Facebook og YouTube.
        </StyledTypography>
      </TextCard>
    </MainSection>
  );
};

export default AboutSection;
