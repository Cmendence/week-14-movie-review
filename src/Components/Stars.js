import React, {useEffect} from 'react';
import ReactStars from "react-stars";
import {useState} from 'react';


//•	Stars: a one to five-star rating component that allows users to rate something
// (movies in this case, but remember that components are reusable, so you could use it elsewhere!)


export default function Stars(props) {

   let [starRating, addStars] = useState(props.starRating);
   // let [addStars] = useState(props.starRating);

   const handleChange = (newStars) => {
      addStars(newStars);
   };

   useEffect(() => {
      props.onChange(starRating);
   }, [starRating]);

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
)


}