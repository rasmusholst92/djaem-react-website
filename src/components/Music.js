import React, { useEffect, useState, useRef, useCallback } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { getAllMusic } from '../hooks/useMusicData';
import MusicTrack from './MusicTrack';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledMusicContainer = styled.div`
  padding-top: 10vh; // Increased top padding
  padding-bottom: 30dvh
`;

const SectionHeader = styled.h2`
  font-size: 3.5em;
  font-style: italic;
  text-align: center;
  color: white;
  padding: 0 50px;
  margin-bottom: -28px;
  cursor: default;
`;

const SliderContainer = styled.div`
  padding: 0 50px;
`;

const sliderSettings = {
  dots: false,
  infinite: true,
  centerMode: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 600,
      settings: { slidesToShow: 1, centerMode: false },
    },
  ],
};

const Music = () => {
  const [tracks, setTracks] = useState([]);
  const sliderRef = useRef(null);

  const handleKeyDown = useCallback((e) => {
    if (sliderRef.current) {
      switch(e.keyCode) {
        case 37: // Left arrow key
          sliderRef.current.slickPrev();
          break;
        case 39: // Right arrow key
          sliderRef.current.slickNext();
          break;
        default:
          break;
      }
    }
  }, []);

  useEffect(() => {
    const fetchMusic = async () => {
      try {
        const data = await getAllMusic();
        setTracks(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMusic();
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <StyledMusicContainer>
      <SectionHeader>MUSIK</SectionHeader>
      <SliderContainer>
        <Slider ref={sliderRef} {...sliderSettings}>
          {tracks.map((track) => (
            <MusicTrack key={track.music_id} track={track} />
          ))}
        </Slider>
      </SliderContainer>
    </StyledMusicContainer>
  );
};

export default Music;
