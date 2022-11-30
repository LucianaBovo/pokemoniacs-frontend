import React, { useEffect, useState } from 'react'
import './PokeCategory.css'
const PokeCategory = ({ onInputChange }) => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const getCategories = async () => {
            try {
                const categories = await fetch('https://api.pokemontcg.io/v2/types');
                const results = await categories.json();
                console.log('from categories..', results.data)
                if (results.data !== 'undefined')
                    setCategories(results.data);
            }
            catch (err) {
                console.log(err)
            };
        }
        getCategories()
    }, [])

    return (
        <div className="pokemon-categories">
            {categories.map((category, index) =>
                <label key={index} className='pokeCategory'>
                    <input type="checkbox" name="pokeCategory" value={category} onChange={onInputChange} />
                    <span>{category}</span>
                </label>
            )}

        </div>
    )
}

export default PokeCategory
