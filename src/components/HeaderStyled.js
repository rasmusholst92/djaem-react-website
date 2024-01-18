import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: var(--raisin-black); // Darker background color
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem;
`;

export const NavLink = styled.button`
  background: none;
  border: none;
  color: white; // White text color
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
  margin: 0 10px;
  &:hover {
    font-style: italic;
    transition: font-family 0.3s ease;
    color: var(--amaranth-purple); 
  }
`;

export const BandName = styled.h1`
  color: white;
  font-size: 3em;
  font-family: 'Playfair Display', serif;

  span:first-child, span:last-child {
    font-size: 5em; /* Larger size for the first and last letters */
  }
`;
