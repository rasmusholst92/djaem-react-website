import styled from 'styled-components';
import { Container, Typography } from '@mui/material';

export const FooterContainer = styled(Container)`
  background-color: #ffffff;
  color: white;
  padding: 20px;
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 999;
  overflow: hidden;
`;

export const FooterText = styled(Typography)`
  && {
    color: var(--black);
  }
`;

export const FooterEmail = styled(Typography)`
  && {
    color: #ffffff;
    font-size: 14px;
    margin-top: 5px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const IconStyle = {
  color: 'var(--black)',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: 'var(--djaem-red)'
  },
};
