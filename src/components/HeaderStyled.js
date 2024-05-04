import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: var(--black);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem;
  top: 0;
  z-index: 10;
`;

export const NavLink = styled.button`
  background: none;
  border: none;
  color: var(--white);
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
  margin: 0 10px;
  &:hover {
    font-style: italic;
    transition: font-family 0.3s ease;
    color: var(--djaem-red); 
  };
  @media (max-width: 960px) {
    display: none;
  }
`;

export const BandName = styled.h1`
  color: var(--white);
  font-size: 3.5em;
  letter-spacing: .8rem;
  font-family: 'Playfair Display', serif;
  position: relative;
  padding-bottom: 2px;
  cursor: default;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 100%;
    background: linear-gradient(to right, var(--djaem-red), var(--lavender-blush), var(--djaem-red));
  }
`;

