import React, {useEffect, useRef, useState} from 'react';

const TableSeats = ({ seat, onSelectHandler, selected }) => {
  const [checked, setChecked] = useState(false)

  function onSeatHandler (event) {
    onSelectHandler(seat)
  }

  useEffect(() => {
    setChecked(selected.includes(seat.id))
    console.log(selected)
  }, [selected, seat])

    return(
      <div className="table-seats">
        <div className='seats-container'>
          <label htmlFor="checkbox">
            <input
              className='seat-checkbox'
              id="checkbox"
              type="checkbox"
              checked={checked}
            />
            <div
              className="seat"
              onClick={onSeatHandler}
            />
          </label>
        </div>
      </div>
    )
};

export default TableSeats;