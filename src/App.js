import reviews from './data'
import React from 'react';
import Testimonial from "./components/Testimonial.jsx"

function App() {
  return (
    <div className='app'>
      <div className='heading'>
        <h1 className='heading-h1'>Our Testimonials</h1>
        <div className='line'></div>
        <Testimonial reviews={reviews}/>
      </div>
     
    </div>
  );
}

export default App;
