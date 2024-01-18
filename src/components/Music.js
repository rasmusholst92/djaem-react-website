import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import '../styles/MusicStyles.css';
import { getAllMusic } from '../hooks/useMusicData.js';
import Track from './MusicTrack.js';

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
    <div style={{ padding: "0 50px", paddingTop: "10vh", position: "relative" }}>
      <h2 className="section-header">MUSIK</h2>
      <Slider {...settings}>
        {tracks.map((track) => (
          <Track key={track.music_id} track={track} />
        ))}
      </Slider>
    </div>
  );  
};

export default Music;
