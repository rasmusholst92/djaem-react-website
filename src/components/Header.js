import React from 'react';
import { HeaderContainer, NavLink, BandName } from './HeaderStyled';

const Header = ({ onOmClick, onMusicClick }) => {
  return (
    <HeaderContainer>
      <NavLink onClick={onOmClick}>OM</NavLink>
      <BandName>DJAEM</BandName>
      <NavLink onClick={onMusicClick}>MUSIK</NavLink>
    </HeaderContainer>
  );
};

export default Header;
