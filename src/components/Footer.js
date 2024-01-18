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
  const currentYear = new Date().getFullYear();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <FooterContainer maxWidth="xxl" sx={{fontFamily: ""}}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item xs={12} sm={6}>
          <FooterText variant="body1">
            © {currentYear} DJAEM. {isMobile ? '' : 'Alle rettigheder forbeholdes'}
          </FooterText>
          <a style={{ color: 'white', textDecoration: 'none' }} href="mailto:kontakt@djaem.dk">kontakt@djaem.dk</a>
        </Grid>
        <Grid item xs={12} sm={6}>
          <IconContainer>
            <IconButton href='https://open.spotify.com/artist/5MwFy5y03VCf7EiEQcKxIx' aria-label="spotify" color="inherit" sx={IconStyle}>
              <FontAwesomeIcon icon={faSpotify} />
            </IconButton>
            <IconButton href='https://www.youtube.com/@djaem' aria-label="youtube" color="inherit" sx={IconStyle}>
              <YouTubeIcon />
            </IconButton>
            <IconButton href='' aria-label="facebook" color="inherit" sx={IconStyle}>
              <FacebookIcon />
            </IconButton>
          </IconContainer>
        </Grid>
      </Grid>
    </FooterContainer>
  );
};

export default Footer;
