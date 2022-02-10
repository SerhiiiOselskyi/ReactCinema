import React, {useEffect, useRef, useState} from 'react';
import Card2 from './Card2';


const Carousel = () => {

  const cardWidth = 400

  const [translatePosition, setTranslatePosition] = useState(0)

  function onLeft () {
    setTranslatePosition(translatePosition - cardWidth)
  }

  function onRight () {
    setTranslatePosition(translatePosition - cardWidth)

    console.log(translatePosition)
  }

  useEffect(() => {

  }, [translatePosition])

  return(
    <div>
      <div className="carousel">
        <div
          className='cards-container'
          style={{'transform': `translate(-${translatePosition}px, 0)`, 'transition': '0.5s'}}
        >
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
        </div>
      </div>
      <button onClick={onLeft} className='left-btn'/>
      <button onClick={onRight} className='right-btn'/>
    </div>

    )
};

export default Carousel;
