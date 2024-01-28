import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import styled from 'styled-components';

const MainSection = styled(Box)({
  display: 'flex',
  flexDirection: 'row', // Default to row
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  position: 'relative',
  overflow: 'hidden',
  '@media (max-width: 960px)': {
    flexDirection: 'column', // Change to column on smaller screens
    paddingBottom: '2rem',
  },
});

const ImageContainer = styled('img')({
  maxWidth: '40%',
  height: 'auto',
  position: 'relative',
  '@media (max-width: 960px)': {
    maxWidth: '80%', // Full width on smaller screens
  },
});

const TextCard = styled(Paper)({
  marginLeft: '-5%',
  padding: '20px',
  width: '30%',
  backgroundColor: '#fff',
  position: 'relative',
  zIndex: 1,
  '@media (max-width: 960px)': {
    width: '80%', // Full width on smaller screens
    marginLeft: '0', // Adjust position on smaller screens
    marginTop: '20px', // Add space between the image and text
  },
});

const StyledTypography = styled(Typography)({
  letterSpacing: '0.1em',
  lineHeight: '1.6',
  textAlign: 'justify',
  marginBottom: '1em',
  color: '#333',
  fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
  fontWeight: 400,
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
  '@media (max-width: 960px)': {
    fontSize: '2em', // Smaller font size on smaller screens
  },
});

const AboutSection = () => {

  return (
    <MainSection>
      <ImageContainer src="http://djaem.dk/Billeder/Paa_Vej.png" alt="DJÆM Image" />
      <TextCard elevation={3}>
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
