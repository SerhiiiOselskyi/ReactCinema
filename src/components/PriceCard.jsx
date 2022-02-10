import React, {useEffect, useRef} from 'react';
import BuyButton from './BuyButton';

const Card = ({ id }) => {
    return(
      <div className="price-card">
        <span> {id} </span>
      </div>
    )
};

export default Card;