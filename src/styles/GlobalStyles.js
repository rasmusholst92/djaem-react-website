import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }

  :root {
    --rose-quartz: #C2AEB7ff;
    --lavender-blush: #E6DEE2ff;
    --raisin-black: #3E333Aff;
    --amaranth-purple: #B3204Bff;
    --quinacridone-magenta: #7C314Dff;
    --black: #000000;
  }

  @media (max-width: 768px) {
    // Responsive styles for smaller screens
    h1 {
      font-size: 1.5rem;
    }
  }
`;

export default GlobalStyle;
