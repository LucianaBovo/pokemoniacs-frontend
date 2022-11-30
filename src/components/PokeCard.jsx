import React from 'react'
import { useState } from 'react'
import './PokeCard.css'
import CardInfo from './CardInfo';

const PokeCard = ({ card }) => {
  // console.log('card inside pokecard', card);
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible(!visible);
  }

  return (
    <div className='poke-card-container'>
    <div className='poke-card' key={card.id}>
      <img src={card.imageUrl} alt={card.name} onClick={handleClick} />
      <div className='poke-card-body'>
        {visible ? <CardInfo card={card} visible={visible} setVisible={setVisible} /> : null}
        <p>{card.description}</p>
      </div>
    </div>
    </div>
  )
}

export default PokeCard