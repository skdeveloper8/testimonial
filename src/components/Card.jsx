import React from 'react';
import {FaQuoteLeft,FaQuoteRight} from 'react-icons/fa';


function Card(props) {
    let review=props.review;
  return (
    <div className='card'>
        <div className='div-img'>
            <img src={review.image} alt='pic' />
            <div className='img-back'></div>
        </div>

        <div className='name'>
            <p>{review.name}</p>
        </div>

        <div className='job'>
            <p>{review.job}</p>
        </div>

        <div className='fa'><FaQuoteLeft/></div>
        <div className='text'>{review.text}</div>
        <div className='fa'><FaQuoteRight/></div>
       
    </div>
  );
};

export default Card;