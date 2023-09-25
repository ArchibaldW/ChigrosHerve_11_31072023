import { useState } from 'react';
import leftChevron from './left-chevron.svg';
import rightChevron from './right-chevron.svg';

import './style.scss';

export default function Carousel({ pictures }) {
  const [index, setIndex] = useState(0);

  function prevSlide() {
    setIndex(index === 0 ? pictures.length - 1 : index - 1);
  }

  function nextSlide() {
    setIndex(index === pictures.length - 1 ? 0 : index + 1);
  }

  return (
    <div className="carousel">
      <img
        className="carousel__prev"
        src={leftChevron}
        onClick={prevSlide}
      />
      <img
        className="carousel__picture"
        src={pictures[index]}
      />
      <img
        className="carousel__next"
        src={rightChevron}
        onClick={nextSlide}
      />
      <div className="carousel__index">
        {index}/{pictures.length}
      </div>
    </div>
  );
}
