import React, { useEffect, useState, useRef } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { getAllMusic } from '../hooks/useMusicData.js';
import MusicTrack from './MusicTrack.js';
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
`;

const SliderContainer = styled.div`
  padding: 0 50px;
`;

const Music = () => {
  const [tracks, setTracks] = useState([]);
  const sliderRef = useRef(null);

  const handleKeyDown = (e) => {
    if (sliderRef.current) {
      if (e.keyCode === 37) { // Left arrow key
        sliderRef.current.slickPrev();
      } else if (e.keyCode === 39) { // Right arrow key
        sliderRef.current.slickNext();
      }
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: false
        },
      },
    ],
  };

  useEffect(() => {
    getAllMusic()
      .then(data => setTracks(data))
      .catch(error => console.error(error));

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <StyledMusicContainer>
      <SectionHeader>MUSIK</SectionHeader>
      <SliderContainer>
        <Slider ref={sliderRef} {...settings}>
          {tracks.map((track) => (
            <MusicTrack key={track.music_id} track={track} />
          ))}
        </Slider>
      </SliderContainer>
    </StyledMusicContainer>
  );
};

export default Music;
