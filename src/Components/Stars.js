import React, { useEffect, useState } from 'react';
import ReactStars from 'react-stars';

export default function Stars({starRating, onChange}) {
  const [stars, setStars] = useState(starRating);

  useEffect(() => {
    onChange(stars);
  }, [stars, onChange]);

  const handleChange = (newRating) => {
   setStars(newRating);
 };
 

  return (
    <div>
      <ReactStars
        className='d-flex justify-content-center'
        count={5}
        onChange={handleChange}
        size={70}
        color2='#ff9100'
      />
    </div>
  );
}
