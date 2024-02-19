import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import styled from 'styled-components';

const MainSection = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  position: 'relative',
  overflow: 'hidden',
  '@media (max-width: 960px)': {
    flexDirection: 'column',
    paddingBottom: '2rem',
  },
});

const ImageContainer = styled('img')({
  maxWidth: '40%',
  height: 'auto',
  position: 'relative',
  '@media (max-width: 960px)': {
    maxWidth: '80%',
  },
});

const TextCard = styled(Paper)({
  marginLeft: '-5%',
  padding: '20px',
  width: '30%',
  backgroundColor: '#FCFBF4',
  position: 'relative',
  zIndex: 1,
  cursor: 'default',
  '@media (max-width: 960px)': {
    width: '80%',
    marginLeft: '0',
    marginTop: '20px',
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
  fontStyle: 'italic',
  cursor: 'default',
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
  cursor: 'default',
  '@media (max-width: 960px)': {
    fontSize: '3.5em',
  },
});

const AboutSection = () => {
  const IMAGE = "http://djaem.dk/Billeder/Paa_Vej.png";

  return (
    <MainSection>
      <ImageContainer src={IMAGE} alt="DJAEM Image" />
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
