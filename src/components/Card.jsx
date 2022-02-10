import React, {useEffect, useRef} from 'react';
import BuyButton from './BuyButton';

const Card = () => {
    return(
      <div className="card">
        <img className='card__photo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrdPsGJEBxBev7gKo_EMp0Pgk7Q7su_xTUxf3vo8dE9S_CiG2Z" alt="" />
          <div className='card__description'>
            <h2>Людина Павук</h2>
            <div>
              <span className='text-black-bold'>12+</span>
              <span className='text-grey-1'>Фантастичний екшн</span>
            </div>
            <span className='text-black-bold'>Сьогодні, 08 лютого</span>
            <BuyButton />
            <span>Наступні сеанси</span>
          </div> 
      </div>
    )
};

export default Card;