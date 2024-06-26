import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { FooterContainer, FooterText, FooterEmail, IconContainer, IconStyle } from './FooterStyled';
import { Grid, IconButton } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
  const SPOFITY_URL   = "https://open.spotify.com/artist/5MwFy5y03VCf7EiEQcKxIx?si=C01S6QLSQEiesZM9jeHt9w";
  const YOUTUBE_URL   = "https://www.youtube.com/@djaem";
  const FACEBOOK_URL  = "https://www.facebook.com/Djaem2";
  const INSTAGRAM_URL = "https://www.instagram.com/djaemofficial";
  const EMAIL         = "kontakt@djaem.dk";

  const CURRENT_YEAR  = new Date().getFullYear();
  const theme         = useTheme();
  const isMobile      = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <FooterContainer className="app-footer" maxWidth="xxl">
      <Grid container spacing={isMobile ? 2 : 4} justifyContent="space-between" alignItems="center">
        <Grid item xs={12} sm={6} style={{ textAlign: isMobile ? 'center' : 'left' }}>
          <FooterText variant="body1">
            © {CURRENT_YEAR} <b>DJAEM</b> - {isMobile ? '' : 'Alle rettigheder forbeholdes'}
          </FooterText>
          <FooterEmail component="a" href={`mailto:${EMAIL}`} style={{ color: 'black', textDecoration: 'none' }}>
            {EMAIL}
          </FooterEmail>
        </Grid>
        <Grid item xs={12} sm={6} style={{ display: 'flex', justifyContent: isMobile ? 'center' : 'flex-end' }}>
          <IconContainer>
            <IconButton href={SPOFITY_URL} target="_blank" aria-label="spotify" color="inherit" sx={IconStyle}>
              <FontAwesomeIcon icon={faSpotify} />
            </IconButton>
            <IconButton href={FACEBOOK_URL} target="_blank" aria-label="facebook" color="inherit" sx={IconStyle}>
              <FacebookIcon />
            </IconButton>
            <IconButton href={INSTAGRAM_URL} target="_blank" aria-label="instagram" color="inherit" sx={IconStyle}>
              <InstagramIcon />
            </IconButton>
            <IconButton href={YOUTUBE_URL} target="_blank" aria-label="youtube" color="inherit" sx={IconStyle}>
              <YouTubeIcon />
            </IconButton>
          </IconContainer>
        </Grid>
      </Grid>
    </FooterContainer>
  );
};

export default Footer;
