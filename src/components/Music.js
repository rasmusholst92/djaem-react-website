import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { getAllMusic } from '../hooks/useMusicData.js';
import MusicTrack from './MusicTrack.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledMusicContainer = styled.div`
  padding-top: 10vh; // Increased top padding
`;

const SectionHeader = styled.h2`
  font-size: 3.5em;
  font-style: italic;
  text-align: center;
  padding: 0 50px;
  margin-bottom: -30px;
`;

const SliderContainer = styled.div`
  padding: 0 50px;
`;

const Music = () => {
  const [tracks, setTracks] = useState([]);

  const settings = {
    dots: false,
    infinite: false,
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
        },
      },
    ],
  };

  useEffect(() => {
    getAllMusic()
      .then(data => setTracks(data))
      .catch(error => console.error(error));
  }, []);
  return (
    <StyledMusicContainer>
      <SectionHeader>MUSIK</SectionHeader>
      <SliderContainer>
        <Slider {...settings}>
          {tracks.map((track) => (
            <MusicTrack key={track.music_id} track={track} />
          ))}
        </Slider>
      </SliderContainer>
    </StyledMusicContainer>
  );
};

export default Music;
