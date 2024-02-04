import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import { FooterContainer, FooterText, IconContainer, IconStyle } from './FooterStyled';
import { Grid, IconButton } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
  const SPOFITY_URL = "https://sptfy.com/PYz2";
  const YOUTUBE_URL = "https://www.youtube.com/@djaem";
  const FACEBOOK_URL = "https://www.facebook.com/djaemmusic";

  const CURRENT_YEAR = new Date().getFullYear();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <FooterContainer className="app-footer" maxWidth="xxl" sx={{fontFamily: ""}}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item xs={12} sm={6}>
          <FooterText variant="body1">
            © {CURRENT_YEAR} DJAEM. {isMobile ? '' : 'Alle rettigheder forbeholdes'}
          </FooterText>
          <a style={{ color: 'black', textDecoration: 'none' }} href="mailto:kontakt@djaem.dk">kontakt@djaem.dk</a>
        </Grid>
        <Grid item xs={12} sm={6}>
          <IconContainer>
            <IconButton href={SPOFITY_URL} aria-label="spotify" color="inherit" sx={IconStyle}>
              <FontAwesomeIcon icon={faSpotify} />
            </IconButton>
            <IconButton href={YOUTUBE_URL} aria-label="youtube" color="inherit" sx={IconStyle}>
              <YouTubeIcon />
            </IconButton>
            <IconButton href={FACEBOOK_URL} aria-label="facebook" color="inherit" sx={IconStyle}>
              <FacebookIcon />
            </IconButton>
          </IconContainer>
        </Grid>
      </Grid>
    </FooterContainer>
  );
};

export default Footer;
