import React from 'react'
import { useState } from 'react'
import './PokeCard.css'
import CardInfo from './CardInfo';

const PokeCard = ({ card }) => {
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible(!visible);
  }

  return (
    <div className='poke-card-container'>
      <div className='poke-card' key={card.id}>
        <img src={card.imageUrl} alt={card.name} onClick={handleClick} />
        {visible ?
          <div className='poke-card-body'>
            <CardInfo card={card} visible={visible} setVisible={setVisible} />
          </div> : null
        }
      </div>
    </div>
  )
}

export default PokeCard