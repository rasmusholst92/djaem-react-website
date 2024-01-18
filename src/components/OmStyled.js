import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px;
  position: relative; // Make sure this is set
  margin-top: 50vh; // Increase space between sections
`;

export const SectionHeader = styled.h2`
  font-size: 3.5em; // Large font size
  font-style: italic; // Italic text
  position: absolute; // Position absolutely within the relative container
  top: -75px; // Adjust as needed to position correctly
  left: 50%; // Center horizontally
  transform: translateX(-50%); // Adjust for exact centering
  z-index: 10; // Ensure it's above other content
`;


export const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  margin: 0.5em 0;
`;

export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin-top: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Column = styled.div`
  flex: 1;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 10px;
  border-radius: 2px;
  filter: grayscale(100%);
  transition: filter 0.3s;

  &:hover {
    filter: grayscale(0%);
  }
`;

export const TextSection = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`;

export const Paragraph = styled.p`
  font-size: 1em;
  line-height: 1.6;
  margin: 0;
  font-family: Arial, sans-serif;
  text-align: justify; /* Justify the text */

  /* Use pseudo-elements to add additional spacing */
  &:first-line {
    margin-right: 20px; /* Adjust as needed for desired line length */
  }
`;

export const Headline = styled.h2`
  font-size: 1em;
  margin-top: 0;
  margin-bottom: 5px;
  font-style: italic;
  font-family: Arial, sans-serif;
`;
