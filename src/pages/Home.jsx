import React, {useEffect, useRef, useState} from 'react';
import TableSeats from '../components/TableSeats'
import PriceCard from '../components/PriceCard'

const Home = () => {

  const [selected, setSelected] = useState([])

    const seatsTables = [
      [
        {
          id: 1,
          row: 1,
          seatNumber: 1,
          price: 100
        },
        {
          id: 2,
          row: 1,
          seatNumber: 2,
          price: 100

        }
      ],
      [
        {
          id: 3,
          row: 1,
          seatNumber: 3,
          price: 100

        },
        {
          id: 4,
          row: 2,
          seatNumber: 4,
          price: 100
        }
      ]
    ]

    function onSelectHandler (seat) {
      selected.includes(seat.id)
        ? setSelected(selected.filter(s => s !== seat.id))
        : setSelected([
          ...selected,
          seat.id
        ])
    }

    return(
      <div className="Cinema-table">
        <div className='card-list'>
          {
            seatsTables.map(rows => {
              return rows.map(seat =>  <TableSeats
                seat={seat}
                onSelectHandler={onSelectHandler}
                selected={selected}
              />)
            })
          }

          <div className='pay'>
            {selected.map(id => {
              return (
                <PriceCard id={id} />
              )
            })}
          </div>
        </div>
        {selected}
      </div>
    )
};

export default Home;