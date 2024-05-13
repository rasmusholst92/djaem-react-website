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
  maxWidth: '47%',
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
  backgroundColor: '#272727 !important',
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
  marginBottom: '1em',
  color: 'var(--white) !important',
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
  const URL   = "https://djaem.dk/Billeder/";
  const IMAGE = "Spotlight.png";
  const IMG   = URL + IMAGE;

  return (
    <MainSection>
      <ImageContainer src={IMG} alt="DJAEM Image" />
      <TextCard elevation={3}>
        <OmText>OM</OmText>
        <StyledTypography variant="body1">
        <b>DJAEM</b> er en musikfælleskab bestående af Jan Andersen og Emma Jarl. Far og datter. Navnet er sammensat af JA (Jan) og EM (Emma) og D-et tilskrives den ældste datter, som hedder Dina. Hun er med på sidelinjen med gode råd og kritisk stillingtagen. Så det er lidt af et familieforetagende.
        <br /><br />
        <b>DJAEM</b> er samtidig et lille hjemme lydstudie med alt relevant udstyr. Klaver, guitarer, mikrofoner, controllere etc., samt en masse computere og software. 
        <br /><br />
        <b>Vi</b> laver alting selv. Tekster, musik, indspilning, mixning, mastering og distribution. Vores musik udkommer på ca. 15 forskellige platforme, men de mest brugte er Spotify, Apple Music, Facebook og YouTube.
        <br /><br />
        <b>Her</b> på hjemmesiden (webmaster Rasmus, svigersøn) ligger al musik samlet et sted og herfra linker man videre til de forskellige platforme. 
        <br /><br />
        <b>Håber</b>, at I kan lide noget af det vi laver. 
        <br />
        Skriv gerne til os på Facebook.
        <br /><br />
        <b>Emma og Jan </b>
        </StyledTypography>
      </TextCard>
    </MainSection>
  );
};

export default AboutSection;
