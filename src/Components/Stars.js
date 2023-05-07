import React, { useEffect, useState } from 'react';
import ReactStars from 'react-stars';

export default function Stars({starRating, onChange}) {
  const [stars, setStars] = useState(starRating);

  //useEffect hook updates the stars when changed
  useEffect(() => {
    onChange(stars);
  }, [stars, onChange]);


  //handleChange takes the star rating and uses setStars to set the new star rating
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
