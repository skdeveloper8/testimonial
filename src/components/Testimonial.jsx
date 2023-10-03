import React, { useState } from 'react'
import Card from './Card.jsx'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function Testimonial(props) {
    let reviews = props.reviews;
   // const randomIndex = Math.floor(Math.random() * reviews.length);

    const [ index,setIndex] = useState(0);

    function leftShiftHandler() {
        if (index - 1 < 0) {
            setIndex((reviews.length - 1));
        } else {
            setIndex(index - 1);
        }
    }
    function rigthShiftHandler() {
        if (index + 1 >= reviews.length) {
            setIndex(0);
        } else {
            setIndex((index + 1));
        }
    }
    function surpriseHandler() {
        const randomIndex = Math.floor(Math.random() * reviews.length);
        setIndex(randomIndex);

    }
    return (
        <div className='testi'>
            <Card className='testi-card' review={reviews[index]}/>

            <div className='twobtn'>
                <button onClick={leftShiftHandler} className='btn'><FiChevronLeft /></button>
                <button onClick={rigthShiftHandler} className='btn'><FiChevronRight /></button>
            </div>
            <div>
                <button onClick={surpriseHandler} className='surprise'>Surprise Me</button>
            </div>

        </div>
    );
};

export default Testimonial;