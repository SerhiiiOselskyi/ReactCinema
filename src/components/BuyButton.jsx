import React, {useEffect, useRef} from 'react';
import Glasses from './glasses.png'


const BuyButton = () => {

  return(
      <div className="buy-button">
        <span className='buy-button__time'>17:50</span>
        <span className='buy-button__price'>200 грн</span>
        <div className='card__icon-container'>
          <img className='card__icon' src={Glasses} alt="" />
        </div>
      </div>
    )
};

export default BuyButton;
