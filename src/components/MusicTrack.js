import React from 'react';
import styled from 'styled-components';
import { Box, Typography, Paper, Link } from '@mui/material';

const TrackContainer = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  position: relative;
  margin-right: 1rem; /* Add space between tracks */
  .track-image {
    width: 100%;
    filter: grayscale(100%);
    transition: filter 0.5s ease;
  }

  &:hover .track-info-overlay {
    opacity: 1;
  }

  &:hover .track-image {
    filter: grayscale(0%);
  }

  .track-info-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: linear-gradient(to right, white, rgba(255, 255, 255, 0));
    opacity: 0;
    transition: opacity 0.3s ease;
    overflow: hidden;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 10px;
    
    .track-title {
      font-weight: bold;
      text-align: left;
      margin-bottom: 10px;
    }
    
    .track-link {
      text-align: left;
      text-decoration: none;
      color: black;
      position: relative;
      overflow: hidden;
      line-height: 1.5;
      font-family: 'Roboto', sans-serif;
      
      &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 1px;
        background-color: black;
        transition: width 0.5s ease-in-out;
      }
      
      &:hover::before {
        width: 100%;
      }
    }
  }

  /* Mobile Devices */
  @media screen and (max-width: 600px) {
    margin-top: 5rem;
    margin-bottom: 2.5rem;
    
    .track-info-overlay {
      font-size: 14px;
      padding-left: 5px;
      
      .track-title {
        margin-bottom: 5px;
      }
    }
  }

  /* Tablet Devices */
  @media screen and (max-width: 1024px) {
    margin-top: 7.5rem;
    margin-bottom: 3.5rem;

    .track-info-overlay {
      font-size: 16px;
      padding-left: 8px;

      .track-title {
        margin-bottom: 8px;
      }
    }
  }
`;

const MusicTrack = ({ track }) => {
  const parseUrls = (urlString) => {
    try {
      return JSON.parse(urlString);
    } catch (e) {
      console.error("Error parsing URLs", e);
      return {};
    }
  };

  return (
    <TrackContainer>
      <Paper className='track-container-paper'>
        <img src={track.image} alt={track.title} className="track-image" />
        <Box className="track-info-overlay">
          <Typography className="track-title" variant="h5">
            {track.title}
          </Typography>
          {Object.entries(parseUrls(track.urls)).map(([key, value]) => (
            <Link
              key={key}
              href={
                value.startsWith("http://") || value.startsWith("https://")
                  ? value
                  : `http://${value}`
              }
              target="_blank"
              className="track-link"
            >
              LYT PÅ {key.toUpperCase()}
            </Link>
          ))}
        </Box>
      </Paper>
    </TrackContainer>
  );
};

export default MusicTrack;
